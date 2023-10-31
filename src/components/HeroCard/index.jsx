import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Sword from "../../assets/sword.svg";
import useUser from "../../hooks/useUser";

export default function HeroCard({ hero }) {
  const {
    setSelectedHeroes,
    setOpen,
    setCombinedHeroStats,
    selectedHeroes,
    combinedHeroStats,
  } = useUser();

  const handleCardClick = (hero) => {
    setSelectedHeroes((prevSelectedHeroes) => [...prevSelectedHeroes, hero]);

    if (selectedHeroes.length === 1) {
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
    }
    console.log(combinedHeroStats);
  };

  return (
    <Card
      sx={{
        width: "150px",
        height: "200px",
        borderRadius: "10px",
        border:
          hero.appearance.eyeColor === "Blue"
            ? "3px groove blue"
            : hero.appearance.eyeColor === "Green"
            ? "3px groove green"
            : hero.appearance.eyeColor === "Yellow"
            ? "3px groove yellow"
            : hero.appearance.eyeColor === "Brown"
            ? "3px groove brown"
            : hero.appearance.eyeColor === "-"
            ? "3px groove gray"
            : undefined,
      }}
    >
      <CardActionArea
        onClick={() => handleCardClick(hero)}
        sx={{
          background:
            hero.appearance.eyeColor === "Blue"
              ? "radial-gradient(circle at 50% 50%, #2a5fff, #245af2, #164dd0, #053ca3, #002a75, #001a4c, #030d31, #020427)"
              : hero.appearance.eyeColor === "Green"
              ? "radial-gradient(circle at 50% 50%, #289a09, #24930c, #198210, #0c6a11, #035210, #013c0c, #022d07, #032704)"
              : hero.appearance.eyeColor === "Yellow"
              ? "radial-gradient(circle at 50% 50%, #e0fb1b, #c2d826, #a5b52b, #88942d, #6d742c, #525629, #383925, #1f1f1f)"
              : hero.appearance.eyeColor === "Brown"
              ? "radial-gradient(circle at 50% 50%, #ae583b, #944c33, #7a402c, #613424, #49281d, #331d16, #1e120d, #000000)"
              : hero.appearance.eyeColor === "-"
              ? "radial-gradient(circle at 50% 50%, #a9a29e, #8f8986, #76716e, #5d5a58, #464342, #302e2d, #1b1b1a, #000000)"
              : undefined,
        }}
      >
        <div>
          <CardMedia
            component="img"
            height="110"
            image={hero.images.lg}
            alt="hero-image"
            style={{
              padding: "0 20px 0 20px",
            }}
          />
        </div>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Bangers, sans-serif",
              color: "#d9d9d9",
              marginBottom: "10px",
            }}
          >
            {hero.name}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img src={Sword} alt="Sword" width="15" height="15" />
            <Typography
              sx={{ fontFamily: "Bangers, sans-serif", color: "#d9d9d9" }}
            >
              {hero.powerstats.intelligence +
                hero.powerstats.strength +
                hero.powerstats.speed +
                hero.powerstats.durability +
                hero.powerstats.power +
                hero.powerstats.combat}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
