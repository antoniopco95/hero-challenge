import "./styles.css";
import Sidebar from "../../components/Sidebar";
import HeroCard from "../../components/HeroCard";

function Home() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <div className="cards-area">
            <HeroCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
