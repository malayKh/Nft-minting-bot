import fs from "fs";
/*In case the machine throws an error such as this:
Error: multiple matching events
Then you have to type in the input parameters along with the Event name
for example "NftMinted(adress,string,uint256)"
The format will be "EventName(type1,type2,type3....)" */
process.stdin.on("data", (data) => {
  console.log(`You typed ${data.toString()}`);
  fs.writeFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/function-name.txt",
    data.toString()
  );
  process.exit();
});