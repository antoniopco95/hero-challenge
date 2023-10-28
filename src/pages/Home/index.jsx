import "./styles.css";
import Sidebar from "../../components/Sidebar";

function Home() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-content"></div>
      </div>
    </>
  );
}

export default Home;
