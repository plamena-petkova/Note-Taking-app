import React, { useEffect, useState } from "react";
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

function DropDownComponent({ onSelect, selected, onClear}) {

  const [selectedItems, setSelectedItems] = useState([]);

  console.log('Clear', onClear);
  console.log('Select', onSelect)

  const handleClear = () => {
    if(onClear) {
      setSelectedItems([]);
    }
    
  };


  const onSelectValues = (value) => {
    onSelect(value);
    setSelectedItems(value);
  };


  
  useEffect(() => {
    if (selected) {
      setSelectedItems(selected)
    }
   
  }, [selected]);

  return (
    <Flex gap={8}>
      <Select
        mode="multiple"
        placeholder="Tags"
        allowClear
        style={{
          flex: 1,
        }}
        options={items}
        onChange={onSelectValues}
        value={selectedItems}
        onClear={handleClear}
      />
    </Flex>
  );
}

export default DropDownComponent;

/*
 <Button onClick={handleClear} style={{ marginLeft: '10px' }}>
        Clear Tags
      </Button>

*/
