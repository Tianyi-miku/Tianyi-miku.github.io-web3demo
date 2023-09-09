import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("RandomNumberlottery_s");
  console.log("Deploying contract...")
  const RandomNumberlottery_s = await Factory.deploy(4399)
  await RandomNumberlottery_s.deployed()
  console.log(RandomNumberlottery_s.address);
  //0xa9777B46f4F8D897275CCFd31334c20ac0daB700
  //0x0AA4D97C21Da50639d9Da4b4683236965A977f5B
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
