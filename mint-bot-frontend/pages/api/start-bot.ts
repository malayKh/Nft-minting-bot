import { exec } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    res.status(200);
  }
  if (req.method == "POST") {
    await exec(
      " yarn --cwd C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend hardhat run scripts/get-calldata.ts",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );

    await exec(
      " yarn --cwd C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend hardhat run scripts/final-script.ts",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  }
}
