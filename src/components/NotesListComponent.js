import { Pagination, Input, List, Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import CardComponent from "./CardComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
const { Search } = Input;

function NotesListComponent() {

  const notes = useSelector((state) => state.notes.notes);



  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems =  notes.slice(startIndex, endIndex);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <Layout style={{ display: "flex", flexDirection: "column", padding: 40 }}>
      <Search
        style={{ minWidth: "60vw" }}
        placeholder="search note..."
        onSearch={onSearch}
        enterButton
      />
  
        <Content style={{paddingTop:20}}>
          <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
           
              }}
            dataSource={currentItems}
            renderItem={(note) => (
              <List.Item>
                <CardComponent note={note} />
              </List.Item>
            )}
          />
        </Content>
        <Layout style={{ paddingBottom: 20 }}>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={notes.length}
            onChange={(page) => setCurrentPage(page)}
          />
        </Layout>
      </Layout>
 
  );
}

export default NotesListComponent;
