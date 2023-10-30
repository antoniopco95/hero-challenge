import "./styles.css";
import Sidebar from "../../components/Sidebar";
import HeroCard from "../../components/HeroCard";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";
import BasicModal from "../../components/HeroModal";
import InputSearch from "../../components/InputSearch";

function Home() {
  const { getHeroes, heroes, showCards, selectedHeroes } = useUser();

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          {showCards && (
            <div className="cards-area">
              {heroes &&
                heroes.map((item) => <HeroCard key={item.id} hero={item} />)}
            </div>
          )}
          {selectedHeroes && selectedHeroes.length >= 2 ? <BasicModal /> : null}
          <InputSearch />
        </div>
      </div>
    </>
  );
}

export default Home;
