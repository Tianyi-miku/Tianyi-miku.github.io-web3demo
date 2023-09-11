import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("MyNFT");
  console.log("Deploying contract...")
  const ChainBattles = await Factory.deploy()
  await ChainBattles.deployed()
  console.log(ChainBattles.address);
  // 0x00E275e0bFF194e7835467B7d937623271A88905
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
