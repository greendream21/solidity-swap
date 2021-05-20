require('dotenv').config();

var HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    develop: {
      host: 'localhost',
      port: 7545, // Match default network 'ganache'
      network_id: 5777,
      gas: 6721975, // Truffle default development block gas limit
      gasPrice: 200000000000,
    },
    bsc-testnet: {
      networkCheckTimeout: 100000,
      provider: function() {
        return new HDWalletProvider(
          process.env.PRIVATE_KEY,
          process.env.BLOCKCHAIN_NODE_RPC_URL
        );
      },
      network_id: 97,
      gas: 8000000,
    },
  },
  rpc: {
    host: 'localhost',
    post: 8080,
  },
  mocha: {
    useColors: true,
  },
  compilers: {
    solc: {
      version: "0.5.16", 
      settings: {
        optimizer: {
          enabled: true,
          runs: 50
        },
      }
    }
  }
};
