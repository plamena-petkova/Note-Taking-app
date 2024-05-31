import { Pagination, Space, Input } from "antd";
import { Content } from "antd/es/layout/layout";

import CardComponent from "./CardComponent";
const { Search } = Input;

function NotesListComponent() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <Space style={{ display: "flex", flexDirection: "column" }}>
      <Search
        style={{ minWidth: "60vw", paddingTop:20 }}
        placeholder="search note..."
        onSearch={onSearch}
        enterButton
      />
      <Space
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 20,
          minWidth: "80vw",
        }}
      >
        <Content
          style={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: "80%",
            justifyContent: "center",
          }}
        >
          <CardComponent />
        </Content>
        <Space style={{ paddingBottom: 20 }}>
          <Pagination defaultCurrent={1} total={50} />
        </Space>
      </Space>
    </Space>
  );
}

export default NotesListComponent;
