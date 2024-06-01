import React, { useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import DropDownComponent from "./DropDownComponent";
import TextArea from "antd/es/input/TextArea";
import { createNote } from "../store/noteReducer";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function ModalComponent({ openModal }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [note, setNote] = useState({title:'', description:'', noteText:'', tag:''});
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [noteText, setNoteText] = useState("");

  const note = { noteTitle, noteDescription, noteText };

  console.log("Notes", note);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (noteDescription !== "" && noteText !== "" && noteText !== "") {
      note.id = uuidv4();
      dispatch(createNote(note));
    }

    setIsModalOpen(false);
    setNoteText("");
    setNoteTitle("");
    setNoteDescription("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useState(() => {
    if (openModal) {
      setIsModalOpen(true);
    }
  }, [isModalOpen, openModal]);

  return (
    <>
      <Space>
        <Button type="primary" size="large" onClick={showModal}>
          + Add Note
        </Button>
      </Space>
      <Modal
        title="Create Note"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          style={{ marginTop: 5, marginBottom: 5 }}
          placeholder="Note title"
          onChange={(event) => setNoteTitle(event.target.value)}
        />

        <Input
          required
          style={{ marginTop: 5, marginBottom: 5 }}
          placeholder="Note description"
          onChange={(event) => setNoteDescription(event.target.value)}
        />
        <TextArea
          style={{ marginTop: 5, marginBottom: 5 }}
          placeholder="Notes"
          onChange={(event) => setNoteText(event.target.value)}
        ></TextArea>
        <DropDownComponent />
      </Modal>
    </>
  );
}
export default ModalComponent;
