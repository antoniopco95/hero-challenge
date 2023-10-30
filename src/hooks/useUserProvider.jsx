import { useState, useEffect } from "react";

function useUserProvider() {
  const [heroes, setHeroes] = useState();
  const [showCards, setShowCards] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [combinedHeroStats, setCombinedHeroStats] = useState({
    firstHero: "",
    secondHero: "",
  });

  const getHeroes = async () => {
    try {
      const response = await fetch(
        "http://homologacao3.azapfy.com.br/api/ps/metahumans"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const firstHeroes = data.slice(0, 15);
      setHeroes(firstHeroes);
    } catch (error) {
      console.error("Erro ao consultar dados:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedHeroes([]);
  };

  const handleCardClick = (hero) => {
    setSelectedHeroes((prevSelectedHeroes) => [...prevSelectedHeroes, hero]);
    if (selectedHeroes.length === 2) {
      setOpen(true);
      setCombinedHeroStats({
        firstHero:
          selectedHeroes[0].powerstats.intelligence +
          selectedHeroes[0].powerstats.strength +
          selectedHeroes[0].powerstats.speed +
          selectedHeroes[0].powerstats.durability +
          selectedHeroes[0].powerstats.power +
          selectedHeroes[0].powerstats.combat,
        secondHero:
          selectedHeroes[1].powerstats.intelligence +
          selectedHeroes[1].powerstats.strength +
          selectedHeroes[1].powerstats.speed +
          selectedHeroes[1].powerstats.durability +
          selectedHeroes[1].powerstats.power +
          selectedHeroes[1].powerstats.combat,
      });
      console.log(selectedHeroes);
    }
  };

  return {
    getHeroes,
    heroes,
    showCards,
    setShowCards,
    open,
    setOpen,
    handleClose,
    selectedHeroes,
    setSelectedHeroes,
    handleCardClick,
    combinedHeroStats,
  };
}

export default useUserProvider;
