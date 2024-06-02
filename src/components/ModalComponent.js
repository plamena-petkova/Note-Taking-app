import React, { useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import DropDownComponent from "./DropDownComponent";
import TextArea from "antd/es/input/TextArea";
import { createNote } from "../store/noteReducer";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function ModalComponent() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [noteText, setNoteText] = useState("");
  const [error, setError] = useState(false);
  const [noteTags, setNoteTags] = useState([]);

  const note = { noteTitle, noteDescription, noteText };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (noteDescription !== "" && noteText !== "" && noteText !== "") {
      note.id = uuidv4();
      note.tags = noteTags;
      dispatch(createNote(note));
      setIsModalOpen(false);
      setNoteText("");
      setNoteTitle("");
      setNoteDescription("");
      onClear();
      setError(false);
    } else {
      setError(true);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setNoteText("");
    setNoteTitle("");
    setNoteDescription("");
    setError(false);
    onClear()
  };

  const onSelect = (values) => {
    setNoteTags(values);
  };

  const onClear = () => {
    setNoteTags([]);
  };


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
          required
          value={noteTitle}
          style={{ marginTop: 5, marginBottom: 5 }}
          placeholder="Note title"
          onChange={(event) => setNoteTitle(event.target.value)}
          status={error ? "error" : null}
        />

        <Input
          required
          value={noteDescription}
          style={{ marginTop: 5, marginBottom: 5 }}
          placeholder="Note description"
          onChange={(event) => setNoteDescription(event.target.value)}
          status={error ? "error" : null}
        />
        <TextArea
          required
          value={noteText}
          style={{ marginTop: 5, marginBottom: 5 }}
          placeholder="Notes"
          onChange={(event) => setNoteText(event.target.value)}
          status={error ? "error" : null}
        ></TextArea>
        <DropDownComponent onSelect={onSelect} onClear={onClear} />
      </Modal>
    </>
  );
}
export default ModalComponent;
