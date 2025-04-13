const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("MeeteaToken");
  const token = await Token.deploy();

  await token.deployed();
  console.log(`MeeteaToken deployed to: ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
