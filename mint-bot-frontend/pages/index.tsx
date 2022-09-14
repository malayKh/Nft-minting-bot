import type { NextPage } from "next";
import Head from "next/head";
import ContractBox from "../components/ContractBox";
import Header from "../components/Header";
import FinalButton from "../components/FinalButton";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#AE34E7] via-purple-500 to-[#2A174E] bg-cover">
      <Head>
        <title>Input Nft Data</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContractBox />
      <FinalButton />
    </div>
  );
};

export default Home;