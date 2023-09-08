import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config()
import "hardhat-gas-reporter"
import "@nomiclabs/hardhat-ethers";
//翻墙代理-必须
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent('http://127.0.0.1:7890'); // change to yours
setGlobalDispatcher(proxyAgent);

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/your-api-key"
const SEPOLIA_APIKEY = process.env.SEPOLIA_APIKEY || ''

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.9" },
      { version: "0.4.16" },
      { version: "0.4.24" },
    ],
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
      gas: 2100000,
      gasPrice: 8000000000,
      accounts: [process.env.MOCK_PRIVATE_KEY || ''],
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      timeout: 80000,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: SEPOLIA_APIKEY,
    }
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};

export default config;
