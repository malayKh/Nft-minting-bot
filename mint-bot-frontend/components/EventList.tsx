import { Dropdown, OptionProps, Button } from "@web3uikit/core";
import { server } from "../helper-config";

function EventList() {
  const getList = async () => {
    const response = await fetch(`${server}/api/get-event`, {
      method: "POST",
    });
    window.location.reload();
  };

  let optionsArray: OptionProps[] = [];

  const getEvent = async () => {
    const response = await fetch(`${server}/api/get-event`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    const listArray: [] = data.list;

    for (let i: number = 0; i < listArray.length; i++) {
      optionsArray.push({
        label: listArray[i],
        id: i,
      });
    }
  };
  getEvent();

  return (
    <div className="p-5">
      <div className="justify-center flex">
        <Button
          theme="primary"
          type="submit"
          text="Get List"
          size="large"
          onClick={getList}
        />
      </div>
      <div>
        <div className="justify-center flex ">
          Available Event and Function Names
        </div>
        <div className="justify-center flex ">
          <Dropdown
            dropdownArrowType="normal"
            options={optionsArray}
            onChange={(e) => {
              return;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EventList;
