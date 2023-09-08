import { ethers } from "hardhat";

//模拟数据
async function testMock() {
  // Deploy the VRFCoordinatorV2Mock. This contract is a mock of the VRFCoordinatorV2 contract.
  const Factory = await ethers.getContractFactory("VRFCoordinatorV2Mock");
  console.log("Deploying VRFCoordinatorV2Mock contract...")
  const VRFCoordinatorV2Mock = await Factory.deploy('100000000000000000', '1000000000')
  await VRFCoordinatorV2Mock.deployed()
  console.log('VRFCoordinatorV2Mock address' + '   ' + VRFCoordinatorV2Mock.address);
  // Deploy the MockV3Aggregator contract.

  const Factory1 = await ethers.getContractFactory("MockV3Aggregator");
  console.log("Deploying MockV3Aggregator contract...")
  const MockV3Aggregator = await Factory1.deploy('18', '3000000000000000')
  await MockV3Aggregator.deployed()
  console.log('MockV3Aggregator address' + '   ' + MockV3Aggregator.address);
  // Deploy the LinkToken contract.

  const Factory2 = await ethers.getContractFactory("LinkToken");
  console.log("Deploying LinkToken contract...")
  const LinkToken = await Factory2.deploy()
  await LinkToken.deployed()
  console.log('LinkToken address' + '   ' + LinkToken.address);
  // Deploy the VRFV2Wrapper contract.

  const Factory3 = await ethers.getContractFactory("VRFV2Wrapper");
  console.log("Deploying VRFV2Wrapper contract...")
  const VRFV2Wrapper = await Factory3.deploy(LinkToken.address, MockV3Aggregator.address, VRFCoordinatorV2Mock.address)
  await VRFV2Wrapper.deployed()
  console.log('VRFV2Wrapper address' + '   ' + VRFV2Wrapper.address);
  // Call the VRFV2Wrapper setConfig function to set wrapper specific parameters.

  await VRFV2Wrapper.setConfig('60000', '52000', 10, '0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc', 10)


  await VRFCoordinatorV2Mock.fundSubscription(1, '1000000000000000000000');
  // Call the the VRFCoordinatorV2Mock addConsumer function to add the wrapper contract to your subscription.
  const Factory4 = await ethers.getContractFactory("RandomNumberlottery");
  const RandomNumberlottery = await Factory4.deploy(LinkToken.address, VRFV2Wrapper.address);
  console.log('RandomNumberlottery address' + '   ' + RandomNumberlottery.address);
  // Fund your consumer contract with LINK tokens.
  await LinkToken.transfer(RandomNumberlottery.address, '100000000000000000000')

  //测试随机数
  // await RandomNumberlottery.requestRandomWords()
  // await RandomNumberlottery.requestRandomWords('300000', 3, 3)
  // await VRFCoordinatorV2Mock.fulfillRandomWords(1, VRFV2Wrapper.address)
}

testMock().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
