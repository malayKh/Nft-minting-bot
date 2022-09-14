import { ethers } from "ethers";
import fs from "fs";

async function main() {
  const abi = fs.readFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/abi.json",
    "utf-8"
  );
  const funcName = fs.readFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/function-name.json",
    "utf-8"
  );
  const iface = new ethers.utils.Interface(abi);

  const sign_hash = iface.encodeFunctionData(JSON.parse(funcName), []);

  console.log(`The calldata is ${sign_hash}`);

  fs.writeFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/calldata.json",
    JSON.stringify(sign_hash)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
