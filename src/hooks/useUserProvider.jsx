function useUserProvider() {
  const [heroes, setHeroes] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [combinedHeroStats, setCombinedHeroStats] = useState({
    firstHero: 0,
    secondHero: 0,
  });
  const [searchHero, setSearchHero] = useState("");
  const [filtredArray, setFiltredArray] = useState();

  return {
    heroes,
    setHeroes,
    showCards,
    setShowCards,
    open,
    setOpen,
    selectedHeroes,
    setSelectedHeroes,
    combinedHeroStats,
    searchHero,
    setSearchHero,
    filtredArray,
    setFiltredArray,
    setCombinedHeroStats,
  };
}

export default useUserProvider;
