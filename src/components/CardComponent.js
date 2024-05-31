import { Card, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined  } from "@ant-design/icons";

const { Meta } = Card;

function CardComponent() {
  return (
    <Card
      style={{
        width: 200,
        margin: 10,
        maxHeight:200
      }}
      actions={[<DeleteOutlined key="delete" />, <EditOutlined key="edit" />, <EyeOutlined key="show" /> ]}
    >
      <Meta title="Card title" description="This is the description" />
      <Typography>
        
      </Typography>
    </Card>
  );
}

export default CardComponent;
