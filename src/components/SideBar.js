import { Avatar, Button, Popconfirm, Space, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { UserOutlined } from "@ant-design/icons";
import ModalComponent from "./ModalComponent";
import { useDispatch } from "react-redux";
import { deleteAllNotes, tagSearch } from "../store/noteReducer";
import {
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

function SideBar() {
  const buttonStyle = { width: 120 };
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
        <Space style={{ display:'flex', flexDirection:'column', paddingTop: 20 }}>
          <Popconfirm
            title="Delete all notes"
            description="Are you sure you want to delete all notes?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button style={buttonStyle} type="primary" danger size="large">
              Delete Notes
            </Button>
          </Popconfirm>
          <Button style={buttonStyle} type="primary" size="large" onClick={() => dispatch(tagSearch('allNotes'))}>
              Show Notes
          </Button>
        </Space>
        <Space
          style={{ display: "flex", flexDirection: "column", paddingTop: 20 }}
        >
          <Button style={buttonStyle} onClick={() => dispatch(tagSearch('Work'))}>
            <Space style={{ display: "flex", flexDirection: "row" }}>
              <Typography style={{ color: "blue" }}>Work</Typography>
              <FolderOpenOutlined
                style={{
                  color: "blue",
                }}
              />
            </Space>
          </Button>
          <Button style={buttonStyle} onClick={() => dispatch(tagSearch('Personal'))}>
            <Space style={{ display: "flex", flexDirection: "row" }}>
              <Typography style={{ color: "green" }}>Personal</Typography>
              <BulbOutlined
                style={{
                  color: "green",
                }}
              />
            </Space>
          </Button>
          <Button style={buttonStyle} onClick={() => dispatch(tagSearch('To Do'))}>
            <Space style={{ display: "flex", flexDirection: "row" }}>
              <Typography style={{ color: "yellowgreen" }}>To Do</Typography>
              <CheckCircleOutlined
                style={{
                  color: "yellowgreen",
                }}
              />
            </Space>
          </Button>
          <Button style={buttonStyle} onClick={() => dispatch(tagSearch('Later'))}>
            <Space style={{ display: "flex", flexDirection: "row" }}>
              <Typography style={{ color: "orange" }}>Later</Typography>
              <ClockCircleOutlined
                style={{
                  color: "orange",
                }}
              />
            </Space>
          </Button>
          <Button style={buttonStyle} onClick={() => dispatch(tagSearch('Important'))}>
            <Space style={{ display: "flex", flexDirection: "row" }}>
              <Typography style={{ color: "red" }}>Important</Typography>
              <ExclamationCircleOutlined
                style={{
                  color: "red",
                }}
              />
            </Space>
          </Button>
        </Space>
      </Space>
    </Sider>
  );
}

export default SideBar;
