import fs from "fs";
import { exec } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  address: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    res.status(200).json({ address: "Yet to be put in" });
  }
  if (req.method == "POST") {
    const address = JSON.parse(req.body);
    console.log(address);
    fs.writeFileSync(
      "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/contractAddress.json",
      JSON.stringify({ address: address })
    );
    res.status(201).json({ address: address });

    exec(
      " yarn --cwd C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend hardhat run scripts/get-contract-abi.ts --network mainnet",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          // return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  }
}
