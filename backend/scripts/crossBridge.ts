import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("crossBridge");
  console.log("Deploying contract...")
  const ChainBattles = await Factory.deploy('myToken', '')
  await ChainBattles.deployed()
  console.log(ChainBattles.address);

  //部署两次一次 sepolia 一次 polygon
  //sepolia 0x5eD63aA92B32233A9d246e4b5ECB1FAd3866470B
  //polygon 0x40BD53241B48a3Ff8971967329522e673543082A
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
