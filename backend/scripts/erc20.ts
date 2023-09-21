import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("myERC20");
  console.log("Deploying contract...")
  const ChainBattles = await Factory.deploy('token1', '')
  const repect = await ChainBattles.deployed()
  console.log('token1 address:' + ChainBattles.address);
  // '0xDEce07B7a7c7CE6Cb50adB8Daf54FCc2932873fd'
  await ChainBattles.mint(ethers.utils.parseEther('10000'));

  const ChainBattles1 = await Factory.deploy('token2', '')
  await ChainBattles1.deployed()
  console.log('token2 address:' + ChainBattles1.address);
  // '0x9b347072a82435AeB60984CDA2C56E659E53217D'
  await ChainBattles1.mint(ethers.utils.parseEther('10000'));

  const Factory1 = await ethers.getContractFactory("Trading_swap");
  console.log("Deploying contract...")
  const ChainBattles2 = await Factory1.deploy(ChainBattles.address, ChainBattles1.address)
  await ChainBattles2.deployed()
  console.log('Trading_swap address:' + ChainBattles2.address);
  // '0x20c00b9AeF00640b3c7c0ac8Ba55a2687441521'

  await ChainBattles.approve(ChainBattles2.address, ethers.utils.parseEther('1000'))
  await ChainBattles1.approve(ChainBattles2.address, ethers.utils.parseEther('1000'))

  await ChainBattles2.addLiquidity(ethers.utils.parseEther('100'), ethers.utils.parseEther('100'))

  // const ChainBattles = await ethers.getContractAt("myERC20", "0xDEce07B7a7c7CE6Cb50adB8Daf54FCc2932873fd");
  // const ChainBattles1 = await ethers.getContractAt("myERC20", "0x9b347072a82435AeB60984CDA2C56E659E53217D");
  // const ChainBattles2 = await ethers.getContractAt("Trading_swap", "0x20c00b9AeF00640b3c7c0ac8Ba55a2687441521");

  // await ChainBattles.approve("0x20c00b9AeF00640b3c7c0ac8Ba55a2687441521", ethers.utils.parseEther('1000'))
  // await ChainBattles1.approve(ChainBattles2.address, ethers.utils.parseEther('1000'))
  // await ChainBattles2.addLiquidity(ethers.utils.parseEther('500'), ethers.utils.parseEther('500'))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
