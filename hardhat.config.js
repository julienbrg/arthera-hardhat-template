require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades')
const dotenv = require("dotenv");
dotenv.config();

const { 
  ARTHERA_TESTNET_PRIVATE_KEY,
  ARTHERA_TESTNET_ENDPOINT_URL,
} = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {  
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 100000
  },
  networks: {
    'hardhat': {
      chainId: 1337,
      allowUnlimitedContractSize: true
    },
    'arthera-testnet': {
      url: ARTHERA_TESTNET_ENDPOINT_URL || "",
      chainId: 10243,
      accounts: ARTHERA_TESTNET_PRIVATE_KEY !== undefined ? [ARTHERA_TESTNET_PRIVATE_KEY] : [],
    },
  }, 
};