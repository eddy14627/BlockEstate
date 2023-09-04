require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY =
  "d9b745420c2b9a9e8d1b0d909d599e226c1ef1ca072feecec7eab8bdb607afe5";
const RPC_URL = "https://rpc.ankr.com/polygon_mumbai";
module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  // zksolc: {
  //   version: "1.3.9",
  //   compilerSource: "binary",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //     },
  //   },
  // },
  // networks: {
  //   zksync_testnet: {
  //     url: "https://zksync2-testnet.zksync.dev",
  //     ethNetwork: "goerli",
  //     chainId: 280,
  //     zksync: true,
  //   },
  //   zksync_mainnet: {
  //     url: "https://zksync2-mainnet.zksync.io/",
  //     ethNetwork: "mainnet",
  //     chainId: 324,
  //     zksync: true,
  //   },
  // },
  // paths: {
  //   artifacts: "./artifacts-zk",
  //   cache: "./cache-zk",
  //   sources: "./contracts",
  //   tests: "./test",
  // },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
