import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    res.status(201).json({ ok: "ok" });
  }
  if (req.method == "POST") {
    const func = JSON.parse(req.body);
    console.log(func);
    await fs.writeFileSync(
      "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/function-name.json",
      JSON.stringify(func)
    );
    res.status(201).json(func);
  }
}
