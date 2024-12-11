const hre = require("hardhat");
//0xd6479cc59ef9fb0e8f51a42a40293137a1d591a4

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactoryByAbiAndBytecode("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();
  
  await crowdFunding.deployed();
  
  console.log(`CrowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
