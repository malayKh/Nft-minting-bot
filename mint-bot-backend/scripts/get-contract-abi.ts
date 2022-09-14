import { network } from "hardhat";

import { contract_address } from "../helper-hardhat-config";
import fs from "fs";
import axios from "axios";
const { API_KEY } = process.env;

const getAbi = async (contract_address: string) => {
  const apiKey = API_KEY;
  const address = JSON.parse(contract_address).address; //chainlink token
  let url;
  if (network.name !== "mainnet") {
    url = `https://api-${network.name}.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`;
  } else {
    url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`;
  }
  console.log(url)
  const res = await axios.get(url);
  const abi = JSON.parse(JSON.stringify(res.data.result));

  fs.writeFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/abi.json",
    abi.toString()
  );
};

getAbi(contract_address);