import { Layout } from "antd";

import SideBar from "./components/SideBar";
import NotesListComponent from "./components/NotesListComponent";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <NotesListComponent />
    </Layout>
  );
}

export default App;
