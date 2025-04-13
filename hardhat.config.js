require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: "./frontend/artifacts", // biar frontend bisa akses ABI & bytecode
  },
  networks: {
    hardhat: {},
    tea: {
      url: "https://tea-sepolia.g.alchemy.com/v2/j89tFiiDn7xXiIIcEofvgqS1huIVOluo",
      chainId: 10218,
    }
  }
};

