require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');
require('hardhat-contract-sizer');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    development: {
      url: 'http://127.0.0.1:8545'
    },
    mainnet: {
      url: 'https://rpcapi.fantom.network',
      chainId: 250,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    testnet: {
      //url: 'https://rpc.testnet.fantom.network',
      url: 'https://rpc.ankr.com/fantom_testnet/',
      chainId: 4002,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      ftmTestnet: `${API_KEY}`,
      opera: `${API_KEY}`
    }
  },
  contractSizer: {
    runOnCompile: true,
  },
};
