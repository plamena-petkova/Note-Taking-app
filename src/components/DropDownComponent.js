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

function DropDownComponent({ onSelect, selected, onCancel, onCancelChange}) {

  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectValues = (value) => {
    onSelect(value);
    setSelectedItems(value);
  };
  
  useEffect(() => {
   
    if (selected) {
      setSelectedItems(selected)
    }
    if(!onCancel && (selected === undefined || selected.length === 0)) {
      setSelectedItems([])
      onCancelChange(!onCancel)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, onCancel]);

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
      />
    </Flex>
  );
}

export default DropDownComponent;

