require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.4.25",
  networks: {
    acala: {
      url: "https://eth-rpc-acala.aca-api.network",
      accounts: ["PRIVATE_KEY"],
    },
    acalaBeta: {
      url: "https://eth-rpc-acala.aca-staging.network/",
      accounts: ["PRIVATE_KEY"],
    },
    mandala: {
      url: "https://eth-rpc-mandala.aca-staging.network",
      accounts: ["PRIVATE_KEY"],
    },
  }
};
