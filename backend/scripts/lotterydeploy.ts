import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("RandomNumberlottery_s");
  console.log("Deploying contract...")
  const RandomNumberlottery_s = await Factory.deploy(4399)
  await RandomNumberlottery_s.deployed()
  console.log(RandomNumberlottery_s.address);
  //0x3A6d255584Ce563e7cae078967BD1847fB380871
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
