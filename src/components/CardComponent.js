import { Card, Popconfirm, Space } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { generateTags } from "../utils/generateTags";
import { deleteNote } from "../store/noteReducer";
import EditNoteModalComponent from "./EditNoteModalComponent";
import { useState } from "react";
import ShowNoteModalComponent from "./ShowNoteModalComponent";

const { Meta } = Card;

function CardComponent({ note }) {
  const dispatch = useDispatch();

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openShowNoteModal, setOpenShowNoteModal] = useState(false);

  const onDeleteHandler = (id) => {
    dispatch(deleteNote(id));
  };

  const onEditHandler = () => {
    setOpenEditModal(true);
  };

  const onShowHandler = () => {
    setOpenShowNoteModal(true);
  };

  const confirm = (id) => {
    onDeleteHandler(id);
  };
  const cancel = (e) => {
    setOpenEditModal(false);
    setOpenShowNoteModal(false);
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
        <EditOutlined key="edit" onClick={() => onEditHandler()} />,
        <EyeOutlined key="show" onClick={() => onShowHandler()} />,
      ]}
    >
      <Meta title={note.noteTitle} description={note.noteDescription} />
      {openEditModal && (
        <EditNoteModalComponent
          note={note}
          openModal={openEditModal}
          closeModal={cancel}
        />
      )}
      {openShowNoteModal && (
        <ShowNoteModalComponent
          note={note}
          openModal={openShowNoteModal}
          closeModal={cancel}
        />
      )}
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
