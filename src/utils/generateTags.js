import { Badge, Space, Typography } from "antd";
import {
    ClockCircleOutlined,
    ExclamationCircleOutlined,
    BulbOutlined,
    CheckCircleOutlined,
    FolderOpenOutlined,
  } from "@ant-design/icons";

export const generateTags = (note) => {
    if (!note || !note.tags) return null;

    return note.tags.map((tag) => {
      if (tag === "Work") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "blue" }}>Work</Typography>
                <FolderOpenOutlined
                  style={{
                    color: "blue",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "Personal") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "green" }}>Personal</Typography>
                <BulbOutlined
                  style={{
                    color: "green",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "To Do") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "yellowgreen" }}>To Do</Typography>
                <CheckCircleOutlined
                  style={{
                    color: "yellowgreen",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "Later") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "orange" }}>Later</Typography>
                <ClockCircleOutlined
                  style={{
                    color: "orange",
                  }}
                />
              </Space>
            }
          />
        );
      } else if (tag === "Important") {
        return (
          <Badge
            key={tag}
            count={
              <Space style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "red" }}>Important</Typography>
                <ExclamationCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              </Space>
            }
          />
        );
      } else {
        return null;
      }
    });
  };