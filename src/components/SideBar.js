import { Avatar, Button, Popconfirm, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { UserOutlined } from "@ant-design/icons";
import ModalComponent from "./ModalComponent";
import { useDispatch } from "react-redux";
import { deleteAllNotes } from "../store/noteReducer";

function SideBar() {
  const dispatch = useDispatch();

  const handleDeleteAllNotes = () => {
    dispatch(deleteAllNotes());
  };

  const confirm = (e) => {
    handleDeleteAllNotes();
  };
  const cancel = (e) => {};

  return (
    <Sider
      style={{
        background: "#003559 ",
        display: "flex",
        justifyContent: "center",
        padding: 30,
      }}
    >
      <Space style={{ display: "flex", flexDirection: "column", padding: 20 }}>
        <Avatar size={64} icon={<UserOutlined />} />

        <ModalComponent />
        <Space style={{ paddingTop: 20 }}>
          <Popconfirm
            title="Delete all notes"
            description="Are you sure you want to delete all notes?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              size="large"
              
            >
              Delete Notes
            </Button>
          </Popconfirm>
        </Space>
        
      </Space>
    </Sider>
  );
}

export default SideBar;
