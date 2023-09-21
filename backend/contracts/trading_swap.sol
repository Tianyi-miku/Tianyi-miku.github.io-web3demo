// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Trading_swap is ERC20 {
    // 事件
    event Mint(address indexed sender, uint amount0, uint amount1);
    event Swap(
        address indexed sender,
        uint amountIn,
        address tokenIn,
        uint amountOut,
        address tokenOut
    );
    //ERC20自定义两款代币
    IERC20 public token1;
    IERC20 public token2;

    //储备量
    uint public reserve1;
    uint public reserve2;

    constructor(IERC20 _token1, IERC20 _token2) ERC20("swap", "ss") {
        token1 = _token1;
        token2 = _token2;
    }

    function swap() public {}

    function addLiquidity(
        uint amount1Desired,
        uint amount2Desired
    ) public returns (uint liquidity) {
        // 将添加的流动性转入Swap合约，需事先给Swap合约授权
        token1.transferFrom(msg.sender, address(this), amount1Desired);
        token2.transferFrom(msg.sender, address(this), amount2Desired);
        // 计算添加的流动性
        uint _totalSupply = totalSupply();
        if (_totalSupply == 0) {
            // 如果是第一次添加流动性，铸造 L = sqrt(x * y) 单位的LP（流动性提供者）代币
            liquidity = sqrt(amount1Desired * amount2Desired);
        } else {
            // 如果不是第一次添加流动性，按添加代币的数量比例铸造LP，取两个代币更小的那个比例
            liquidity = min(
                (amount1Desired * _totalSupply) / reserve1,
                (amount2Desired * _totalSupply) / reserve2
            );
        }

        // 检查铸造的LP数量
        require(liquidity > 0, "INSUFFICIENT_LIQUIDITY_MINTED");

        // 更新储备量
        reserve1 = token1.balanceOf(address(this));
        reserve2 = token2.balanceOf(address(this));

        // 给流动性提供者铸造LP代币，代表他们提供的流动性
        _mint(msg.sender, liquidity);

        emit Mint(msg.sender, amount1Desired, amount2Desired);
    }

    // 取两个数的最小值
    function min(uint x, uint y) internal pure returns (uint z) {
        z = x < y ? x : y;
    }

    // 计算平方根 babylonian method (https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method)
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }

    // swap代币
    // @param amountIn 用于交换的代币数量
    // @param tokenIn 用于交换的代币合约地址
    // @param amountOutMin 交换出另一种代币的最低数量
    function myswap(
        uint amountIn,
        IERC20 tokenIn,
        uint amountOutMin
    ) external returns (uint amountOut, IERC20 tokenOut) {
        require(amountIn > 0, "INSUFFICIENT_OUTPUT_AMOUNT");
        require(tokenIn == token2 || tokenIn == token1, "INVALID_TOKEN");

        uint balance0 = token2.balanceOf(address(this));
        uint balance1 = token1.balanceOf(address(this));

        if (tokenIn == token2) {
            // 如果是token2交换token1
            tokenOut = token1;
            // 计算能交换出的token1数量
            amountOut = getAmountOut(amountIn, balance0, balance1);
            console.log(amountOut, amountOutMin);
            require(amountOut > amountOutMin, "INSUFFICIENT_OUTPUT_AMOUNT");
            // 进行交换
            tokenIn.transferFrom(msg.sender, address(this), amountIn);
            tokenOut.transfer(msg.sender, amountOut);
        } else {
            // 如果是token1交换token2
            tokenOut = token2;
            // 计算能交换出的token1数量
            amountOut = getAmountOut(amountIn, balance1, balance0);
            console.log(amountOut);
            require(amountOut > amountOutMin, "INSUFFICIENT_OUTPUT_AMOUNT");
            // 进行交换
            tokenIn.transferFrom(msg.sender, address(this), amountIn);
            tokenOut.transfer(msg.sender, amountOut);
        }

        // 更新储备量
        reserve2 = token2.balanceOf(address(this));
        reserve1 = token1.balanceOf(address(this));

        emit Swap(
            msg.sender,
            amountIn,
            address(tokenIn),
            amountOut,
            address(tokenOut)
        );
    }

    // 给定一个资产的数量和代币对的储备，计算交换另一个代币的数量
    // 由于乘积恒定
    // 交换前: k = x * y
    // 交换后: k = (x + delta_x) * (y + delta_y)
    // 可得 delta_y = - delta_x * y / (x + delta_x)
    // 正/负号代表转入/转出
    function getAmountOut(
        uint amountIn,
        uint reserveIn,
        uint reserveOut
    ) public pure returns (uint amountOut) {
        require(amountIn > 0, "INSUFFICIENT_AMOUNT");
        require(reserveIn > 0 && reserveOut > 0, "INSUFFICIENT_LIQUIDITY");
        amountOut = (amountIn * reserveOut) / (reserveIn + amountIn);
    }
}
