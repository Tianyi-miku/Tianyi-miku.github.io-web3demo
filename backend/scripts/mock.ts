import { ethers } from "hardhat";

const main = async () => {
  const RandomNumberlottery = await ethers.getContractAt("RandomNumberlottery", "0x391342f5acAcaaC9DE1dC4eC3E03f2678f7c78F1");
  await RandomNumberlottery.requestRandomWords()
  const id = RandomNumberlottery.lastRequestId()
  const VRFCoordinatorV2Mock = await ethers.getContractAt("VRFCoordinatorV2Mock", '0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f');
  await VRFCoordinatorV2Mock.fulfillRandomWords(id, '0x43ca3D2C94be00692D207C6A1e60D8B325c6f12f');
}

main()