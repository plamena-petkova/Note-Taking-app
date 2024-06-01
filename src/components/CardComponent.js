import { Badge, Card, Space, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
//import { useDispatch } from "react-redux";
import { ClockCircleOutlined, ExclamationCircleOutlined, BulbOutlined, CheckCircleOutlined, FolderOpenOutlined  } from "@ant-design/icons";


const { Meta } = Card;

function CardComponent({ note }) {
  //const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    //dispatch(deleteNote(id));
  };

  const generateTags = (note) => {
    if (!note || !note.tags) return null;

    return note.tags.map((tag) => {
      if (tag === "Work") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "blue" }}>Work</Typography>
                <FolderOpenOutlined
                  style={{
                    color: "blue",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "Personal") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "green" }}>Personal</Typography>
                <BulbOutlined
                  style={{
                    color: "green",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "To Do") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "yellowgreen" }}>To Do</Typography>
                <CheckCircleOutlined 
                  style={{
                    color: "yellowgreen",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "Later") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "orange" }}>Later</Typography>
                <ClockCircleOutlined
                  style={{
                    color: "orange",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "Important") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "red" }}>Important</Typography>
                <ExclamationCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              </Space>
            }
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Card
      style={{
        width: 200,
        margin: 10,
        minHeight: 240,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      actions={[
        <DeleteOutlined
          key="delete"
          onClick={() => onDeleteHandler(note.id)}
        />,
        <EditOutlined key="edit" />,
        <EyeOutlined key="show" />,
      ]}
    >
      <Meta title={note.noteTitle} description={note.noteDescription} />

      <Space
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        {generateTags(note)}
      </Space>
    </Card>
  );
}

export default CardComponent;
