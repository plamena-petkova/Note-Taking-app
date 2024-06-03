import { Pagination, Input, List, Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import CardComponent from "./CardComponent";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSearch } from "../store/noteReducer";
const { Search } = Input;

function NotesListComponent() {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.notes);
  const searchTag = useSelector((state) => state.notes.searchTag);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const [filteredData, setFilteredData] = useState([]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = notes.slice(startIndex, endIndex);

  const onSearch = useCallback((value) => {
    const filtered = notes.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [notes]);

  useEffect(() => {
    if(searchTag) {
   
      onSearch(searchTag);
      dispatch(tagSearch(''))
    }
  }, [searchTag, dispatch, onSearch])

  console.log('Search tag', searchTag);
  console.log('Filtered', filteredData);

  return (
    <Layout style={{ display: "flex", flexDirection: "column", padding: 40 }}>
      <Search
        style={{ minWidth: "60vw" }}
        placeholder="search note..."
        onSearch={onSearch}
        enterButton
      />

      <Content style={{ paddingTop: 20 }}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          dataSource={!filteredData.length ? currentItems : filteredData}
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
