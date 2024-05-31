import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Meta } = Card;

function CardComponent() {
    return(
        <Card
        style={{
          width: 200,
          margin: 10,
        }}
        actions={[
          <DeleteOutlined key="delete" />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Meta title="Card title" description="This is the description" />
      </Card>
    )
}

export default CardComponent;