import { Input } from "@web3uikit/core";
import { server } from "../helper-config";

function FunctionBox() {
  const getFunction = async () => {
    const response = await fetch(`${server}/api/get-function`, {
      method: "GET",
    });
  };
  getFunction();
  async function handleFunctionChange(body: any) {
    const response = await fetch("/api/get-function", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }
  async function handleEventChange(body: any) {
    const response = await fetch("/api/get-event", {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="place-content-center">
      <div className="justify-center flex ">Type In Function Name</div>
      <div className="justify-center flex ">
        <Input onChange={(e) => handleFunctionChange(e.target.value)} />
      </div>
      <div className="justify-center flex ">Type In Event Name</div>
      <div className="justify-center flex ">
        <Input onChange={(e) => handleEventChange(e.target.value)} />
      </div>
    </div>
  );
}

export default FunctionBox;
