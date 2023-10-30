import "./styles.css";
import Sidebar from "../../components/Sidebar";
import HeroCard from "../../components/HeroCard";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";
import BasicModal from "../../components/HeroModal";
import InputSearch from "../../components/InputSearch";
import NotFound from "../../assets/not-found.svg";

function Home() {
  const {
    getHeroes,
    heroes,
    showCards,
    selectedHeroes,
    searchHero,
    setSearchHero,
    filtredArray,
    setFiltredArray,
  } = useUser();

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <div className="cards-area">
            {filtredArray  ? (
              <HeroCard key={filtredArray.id} hero={filtredArray} />
            ) : showCards && heroes.length > 0 ? (
              heroes.map((item) => <HeroCard key={item.id} hero={item} />)
            ) : null}

            {/*  {heroes &&
              heroes.map((item) => {
                return showCards ? (
                  <HeroCard key={item.id} hero={item} />
                ) : null;
              })} */}
          </div>

          {selectedHeroes && selectedHeroes.length >= 2 ? <BasicModal /> : null}
          <InputSearch />
        </div>
      </div>
    </>
  );
}

export default Home;
