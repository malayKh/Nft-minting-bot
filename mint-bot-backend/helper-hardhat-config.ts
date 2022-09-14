import fs from "fs"

export interface networkConfigItem {
    ethUsdPriceFeed?: string;
    blockConfirmations?: number;
  }
  
  export interface networkConfigInfo {
    [key: string]: networkConfigItem;
  }
  
  export const networkConfig: networkConfigInfo = {
    localhost: {},
    hardhat: {},
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one is ETH/USD contract on Kovan
    kovan: {
      blockConfirmations: 6,
    },
  };
  
  export const developmentChains = ["hardhat", "localhost"];
  
  export const contract_address = fs.readFileSync("C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/contractAddress.json", "utf-8");