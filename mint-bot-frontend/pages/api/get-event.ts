import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const list = fs.readFileSync(
      "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/list.json",
      "utf-8"
    );
    res.send(list);
  }
  if (req.method == "POST") {
    exec(
      " yarn --cwd C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend hardhat run scripts/get-function-names.ts --network mainnet",
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
    const event = JSON.parse(req.body);
    console.log(event);
    fs.writeFileSync(
      "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/event-name.json",
      JSON.stringify(event)
    );
    res.status(201).json(event);
  }
}
