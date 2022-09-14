import fs from "fs";

process.stdin.on("data", (data) => {
  console.log(`You typed ${data.toString()}`);
  fs.writeFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/event-name.json",
    data.toString()
  );
  process.exit();
});
