import React from "react";
import { Modal } from "antd";

import { generateTags } from "../utils/generateTags";

function ShowNoteModalComponent({ openModal, note, closeModal }) {

  return (
    <>
      <Modal
        title="Note"
        open={openModal}
        onCancel={closeModal}
        onOk={closeModal}
      >
        <p style={{ marginTop: 5, marginBottom: 5 }}>{note.noteTitle}</p>
        <p style={{ marginTop: 5, marginBottom: 5 }}>{note.noteDescription}</p>
        <p style={{ marginTop: 5, marginBottom: 5 }}>{note.noteText}</p>
        {generateTags(note)}
      </Modal>
    </>
  );
}
export default ShowNoteModalComponent;
