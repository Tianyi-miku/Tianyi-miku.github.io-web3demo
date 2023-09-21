这是一个实验Demo web3 dapp

代码是试验,没有经过评审,不可直接用在正式环境上

本地代码均以部署到测试网,不需要再部署合约.

# 运行前端代码.

```
cd .\backend\

yarn install
```

在 .env文件中,配置自己的密钥

如没有.env文件,自行新建,将.env.exmaple 改成.env


# 启动项目
```
yarn dev
```
链接sepolia 测试网,如果没有代币需要去水龙头领取.

在sepolia上铸造nft,当前ipfs图片与参数都是测试使用,可以自行修改.
![Alt text](image.png)

# 钱包链接 @rainbow-me

当前钱包用到@rainbow-me/rainbowkit ,具体使用可以查看官网

# alchemy 网络

这里我注册了一个 alchemy, scan_key 新建网络之后,将你的key和rpc填入env, 这里是我用它提供provider,当然也可以配置其他的链接.


# 抽奖

抽奖合约,用到chainlink随机数,合约中已经存放了20 linktoken

如果获取随机数失败,有可能是代币不够了,或者是当前网络波动,gas太高,导致测试写的gaslimit太小失败.


# 跨链桥
在前端监听操作,并没有用预言机的跨链.

需要可自行查看chainlink CCip 或者其他跨链操作协议.