import { Pagination, Input, List, Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import CardComponent from "./CardComponent";
import { useState } from "react";
const { Search } = Input;

function NotesListComponent() {
  const items = Array.from({ length: 100 }, (_, index) => ({
    title: `Item ${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = items.slice(startIndex, endIndex);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <Layout style={{ display: "flex", flexDirection: "column", padding: 40 }}>
      <Search
        style={{ minWidth: "60vw" }}
        placeholder="search note..."
        onSearch={onSearch}
        enterButton
      />
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 20,
          minWidth: "80vw",
        }}
      >
        <Content>
          <List
            grid={{
              gutter: 6,
              column: 4,
            }}
            dataSource={currentItems}
            renderItem={(item) => (
              <List.Item>
                <CardComponent item={item} />
              </List.Item>
            )}
          />
        </Content>
        <Layout style={{ paddingBottom: 20 }}>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={items.length}
            onChange={(page) => setCurrentPage(page)}
          />
        </Layout>
      </Layout>
    </Layout>
  );
}

export default NotesListComponent;
