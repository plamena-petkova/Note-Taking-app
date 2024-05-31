import { Avatar, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { UserOutlined } from "@ant-design/icons";
import ModalComponent from "./ModalComponent";


function SideBar() {

    return (
   
        <Sider
        style={{
          background: "#003559 ",
          display: "flex",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <Space
          style={{ display: "flex", flexDirection: "column", padding: 20 }}
        >
          <Avatar size={64} icon={<UserOutlined />} />
        </Space>
       <ModalComponent />
      </Sider>
    )
}

export default SideBar;