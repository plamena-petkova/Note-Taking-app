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
  const [filteredData, setFilteredData] = useState(null);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = (filteredData !== null ? filteredData : notes).slice(startIndex, endIndex);

  const onSearch = useCallback(
    (value) => {
      if (value.trim() === "") {
        setFilteredData(null);
      } else {
        const filtered = notes.filter((item) =>
          Object.values(item).some((val) =>
            String(val).toLowerCase().includes(value.toLowerCase())
          )
        );
        setFilteredData(filtered.length > 0 ? filtered : []);
      }
      setCurrentPage(1);
    },
    [notes]
  );

  useEffect(() => {
    if(!currentItems) {
      onSearch('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (searchTag) {
      if (searchTag === 'allNotes') {
        setFilteredData(null);
      } else {
        onSearch(searchTag);
      }
      dispatch(tagSearch(''));
    }
  }, [searchTag, dispatch, onSearch]);

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
          dataSource={currentItems}
          renderItem={(note) => (
            <List.Item>
              <CardComponent note={note} />
            </List.Item>
          )}
          locale={{ emptyText: filteredData !== null && filteredData.length === 0 ? "No data" : "No data" }}
        />
      </Content>
      <Layout style={{ paddingBottom: 20 }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredData !== null ? filteredData.length : notes.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </Layout>
    </Layout>
  );
}

export default NotesListComponent;
