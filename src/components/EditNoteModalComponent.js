import React, { useState } from "react";
import { Input, Modal } from "antd";
import DropDownComponent from "./DropDownComponent";
import TextArea from "antd/es/input/TextArea";
import { editNote } from "../store/noteReducer";
import { useDispatch } from "react-redux";

function EditNoteModalComponent({ openModal, note, closeModal }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState(note.noteTitle);
  const [noteDescription, setNoteDescription] = useState(note.noteDescription);
  const [noteText, setNoteText] = useState(note.noteText);
  const [error, setError] = useState(false);
  const [noteTags, setNoteTags] = useState([]);

  const handleOk = () => {
    if (noteTitle !== "" && noteDescription !== "" && noteText !== "") {
      const editedNote = { noteTitle, noteDescription, noteText, noteTags };
      editedNote.id = note.id;
      dispatch(editNote(editedNote));
      setIsModalOpen(false);
      closeModal(isModalOpen)

      setError(false);
    } else {
      setError(true);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    closeModal(true);
    setError(false);
  };

  const onSelect = (values) => {
    setNoteTags(values);
  };

  return (
    <>
      <Modal
        title="Create Note"
        open={openModal}
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
        <DropDownComponent onSelect={onSelect} selected={note.tags} />
      </Modal>
    </>
  );
}
export default EditNoteModalComponent;
