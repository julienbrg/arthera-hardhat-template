require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades')
const dotenv = require("dotenv");
dotenv.config();
// require("@nomiclabs/hardhat-etherscan");

const { 
  GOERLI_TESTNET_ENDPOINT_URL, 
  GOERLI_TESTNET_PRIVATE_KEY, 
  GOERLI_ETHERSCAN_API_KEY, 

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
  outputSelection: {
    "*": {
        "*": [
          "evm.bytecode",
          "evm.deployedBytecode",
          "devdoc",
          "userdoc",
          "metadata",
          "abi"
      ]
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
    'goerli': {
      url: GOERLI_TESTNET_ENDPOINT_URL,
      accounts: GOERLI_TESTNET_PRIVATE_KEY !== undefined ? [GOERLI_TESTNET_PRIVATE_KEY] : [],
    },
    'arthera-testnet': {
      url: ARTHERA_TESTNET_ENDPOINT_URL || "",
      chainId: 10243,
      accounts: ARTHERA_TESTNET_PRIVATE_KEY !== undefined ? [ARTHERA_TESTNET_PRIVATE_KEY] : [],
    },
  },
  // etherscan: {
  //   goerli: GOERLI_ETHERSCAN_API_KEY || "",
  // },
}