import React from "react";
import { Flex, Select } from "antd";

const items = [
  {
    value: "Important",
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

function DropDownComponent({ onSelect, selected}) {

  console.log('Selected', selected)


  const onSelectValues = (value) => {
    onSelect(value);

  };




  /*
  useEffect(() => {
    if (selected) {
      setTags(selected)
    }
  }, [selected, onSelect]);
*/
  return (
    <Flex gap={8}>
      <Select
        mode="multiple"
        placeholder="Tags"
        style={{
          flex: 1,
        }}
        options={items}
        onChange={onSelectValues}
      />
    </Flex>
  );
}

export default DropDownComponent;
