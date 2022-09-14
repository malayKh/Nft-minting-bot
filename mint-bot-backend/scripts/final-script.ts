import { providers, Wallet, BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import fs from "fs";
import { contract_address } from "../helper-hardhat-config";
const CHAIN_ID = 1;
const provider = new providers.InfuraProvider(CHAIN_ID);

const abi = fs.readFileSync(
  "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/abi.json",
  "utf-8"
);

const address = JSON.parse(contract_address).address;
console.log(address);

const contract: Contract = new ethers.Contract(address, abi, provider);

console.log("YO");

if (process.env.WALLET_PRIVATE_KEY === undefined) {
  console.error("Please provide a WALLET_PRIVATE_KEY env");
  process.exit(1);
}

const wallet = new Wallet(process.env.WALLET_PRIVATE_KEY, provider);

const GWEI = BigNumber.from(10).pow(9);
const ETHER = BigNumber.from(10).pow(18);

async function main() {
  const calldata = fs.readFileSync(
    "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-backend/inputs/calldata.json",
    "utf-8"
  );

  let maxFeePerGas: BigNumber | undefined;
  let maxPriorityFeePerGas: BigNumber | undefined;
  let value: BigNumber;

  contract.once("Transfer(address,address,uint256)", async (...args) => {
    console.log("The bot is now running");
    const blockNumber = await args[args.length - 1].blockNumber;
    const txHash = await args[args.length - 1].transactionHash;
    console.log(`The blocknumber will be ${blockNumber + 2}`);
    console.log(txHash);

    await provider.getTransaction(txHash).then(function (transaction) {
      maxFeePerGas = transaction.maxFeePerGas;
      maxPriorityFeePerGas = transaction.maxPriorityFeePerGas;
      value = transaction.value;
    });

    console.log(
      `Max fee per gas is ${maxFeePerGas}, 
    Max priority fee is ${maxPriorityFeePerGas} 
    and value is ${value}`
    );
    const tx = await wallet.sendTransaction({
      chainId: CHAIN_ID,
      type: 2,
      value: ETHER.div(100).mul(3),
      data: calldata,
      maxFeePerGas: GWEI.mul(3),
      maxPriorityFeePerGas: GWEI.mul(2),
      to: address,
    });

    console.log(await tx.wait(1));
  });
}

main();
