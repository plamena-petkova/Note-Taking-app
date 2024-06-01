import { Card, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined  } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/noteReducer";

const { Meta } = Card;

function CardComponent({note}) {

const dispatch = useDispatch();

const onDeleteHandler = (id) => {
  //dispatch(deleteNote(id));
}

  return (
    <Card
      style={{
        width: 200,
        margin: 10,
        maxHeight:200
      }}
      actions={[<DeleteOutlined key="delete" onClick={()=> onDeleteHandler(note.id)} />, <EditOutlined key="edit" />, <EyeOutlined key="show" /> ]}
    >
      <Meta title={note.noteTitle} description={note.noteDescription} />
      <Typography>
      </Typography>
    </Card>
  );
}

export default CardComponent;
