import { Button } from "@web3uikit/core";
import { useState } from "react";
import EventList from "./EventList";
import styles from "C:/Users/Admin/Desktop/code/nft-mint-bot/mint-bot-frontend/styles/Layout.module.css";

export default function ContractBox() {
  const [address, setAddress] = useState("");

  const submitAddress = async () => {
    const response = await fetch("/api/write-address", {
      method: "POST",
      body: JSON.stringify(address),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <label className="block px-20 mx-10">
        <span className="font-bold text-center after:ml-0.5 after:text-red-500 block text-3xl  text-slate-700">
          Input Contract Address
        </span>
        <input
          type="text"
          className="mt-1 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="0x..........."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <div className="justify-center flex">
        {address}

        <Button
          theme="primary"
          type="submit"
          text="Submit"
          size="large"
          onClick={submitAddress}
        />
      </div>
      <EventList />
    </>
  );
}
