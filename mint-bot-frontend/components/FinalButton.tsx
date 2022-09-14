import { Button } from "@web3uikit/core";
import FunctionBox from "./FunctionBox";

const FinalButton = () => {
  const startBot = async () => {
    const response = await fetch("/api/start-bot", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <FunctionBox />

      <div className="justify-center flex ">
        <Button
          theme="secondary"
          type="submit"
          text="Submit"
          size="large"
          onClick={startBot}
        />
      </div>
    </>
  );
};

export default FinalButton;
