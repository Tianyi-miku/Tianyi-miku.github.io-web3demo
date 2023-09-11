import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("SepoliaRandomNumberlottery");
  console.log("Deploying contract...")
  const ChainBattles = await Factory.deploy('', '')
  await ChainBattles.deployed()
  console.log(ChainBattles.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
