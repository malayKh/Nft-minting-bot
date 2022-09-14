import { ethers } from "ethers";
import fs from "fs";

const getFunctionNames = async () => {
  const abi = fs.readFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/abi.json",
    "utf-8"
  );

  const iface = new ethers.utils.Interface(abi);
  const FormatTypes = ethers.utils.FormatTypes;
  const listOfFunctions = iface.format(FormatTypes.full);
  console.log(listOfFunctions);
  let mintEventOrFunction: string[] = [];

  for (let value = 0; value < listOfFunctions.length; value++) {
    const positive = listOfFunctions[value].search("mint");
    const positive2 = listOfFunctions[value].search("Mint");

    if (positive > 0 || positive2 > 0) {
      mintEventOrFunction.push(listOfFunctions[value].toString());
    }
  }

  console.log(`The functions or events can be: ${mintEventOrFunction}`);
  fs.writeFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/list.json",
    JSON.stringify({ list: mintEventOrFunction })
  );
};

getFunctionNames();
