require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    tea: {
      url: "https://tea-sepolia.g.alchemy.com/v2/j89tFiiDn7xXiIIcEofvgqS1huIVOluo", // ganti dengan RPC sebenarnya
      chainId: 10218, // ganti dengan chain ID Tea Sepolia Testnet
    }
  }
};
