import "./styles.css";
import Sidebar from "../../components/Sidebar";
import HeroCard from "../../components/HeroCard";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";
import BasicModal from "../../components/HeroModal";
import InputSearch from "../../components/InputSearch";

function Home() {
  const { heroes, setHeroes, showCards, selectedHeroes, filtredArray } =
    useUser();

  const getHeroes = async () => {
    try {
      const response = await fetch(
        "http://homologacao3.azapfy.com.br/api/ps/metahumans"
      );
      if (!response.ok) {
        throw new Error("Resposta da requisição não foi ok!");
      }
      const data = await response.json();
      const firstHeroes = data.slice(0, 15);
      setHeroes(firstHeroes);
    } catch (error) {
      console.error("Erro ao consultar dados:", error);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <div className="cards-area">
            {filtredArray ? (
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
