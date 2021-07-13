require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = process.env["MNEMONIC"];
var tokenKey = process.env["INFURA_KEY"];
const URL = 'https://rinkeby.infura.io/v3/' + tokenKey;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777 // Match any network id
    },
    rinkeby: {
      networkCheckTimeout: 10000,
      provider:function() {return new HDWalletProvider(mnemonic, URL);
      },
      network_id: 4,
      gas: 4700000,
      confirmations: 4
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
