import React from "react";
import { DownOutlined} from "@ant-design/icons";
import {  Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    danger: true,
    label: "Important",
  },
  {
    key: "4",
    label: "Work",
  },
  {
    key: "2",
    label: "Personal",
  },
  {
    key: "3",
    label: "To Do",
  },
  {
    key: "5",
    label: "Later",
  },
];
function DropDownComponent() {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={() => console.log('Item')}>
        <Space>
          Tags
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default DropDownComponent;
