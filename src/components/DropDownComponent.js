import React from "react";
import { Flex, Select} from "antd";
const items = [
  {
    value:"Important",
    label: "Important",
  },
  {
    value: "Work",
    label: "Work",
  },
  {
    value: "Personal",
    label: "Personal",
  },
  {
    value: "To Do",
    label: "To Do",
  },
  {
    value: "Later",
    label: "Later",
  },
];
function DropDownComponent() {

  return (
    <Flex gap={8}>
       <Select
        mode="multiple"
        defaultValue={items[0]}
        placeholder="Tags"
        style={{
          flex: 1,
        }}
        options={items}
      />
    </Flex>
  );
}

export default DropDownComponent;
