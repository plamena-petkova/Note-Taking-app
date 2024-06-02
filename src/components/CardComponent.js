import { Badge, Card, Popconfirm, Space, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import { deleteNote } from "../store/noteReducer";
import EditNoteModalComponent from "./EditNoteModalComponent";
import { useState } from "react";

const { Meta } = Card;

function CardComponent({ note }) {

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const onDeleteHandler = (id) => {
    dispatch(deleteNote(id));
  };

  const onEditHandler = () => {
    setOpenModal(true);
  };

  const confirm = (id) => {
    onDeleteHandler(id);
  };
  const cancel = (e) => {
   setOpenModal(false)
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
        <>
          <Popconfirm
            description="Delete the note?"
            onConfirm={() => confirm(note.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined key="delete" />
          </Popconfirm>
        </>,
        <EditOutlined key="edit" onClick={() => onEditHandler(note.id)} />,
        <EyeOutlined key="show" />,
      ]}
    >
      <Meta title={note.noteTitle} description={note.noteDescription} />
      {openModal && <EditNoteModalComponent note={note} openModal={openModal} closeModal={cancel} />}
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
