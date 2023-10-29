import { useState, useEffect } from "react";

function useUserProvider() {
  const [heroes, setHeroes] = useState();

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

  return { getHeroes, heroes };
}

export default useUserProvider;
