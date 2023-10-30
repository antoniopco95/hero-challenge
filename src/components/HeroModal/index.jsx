import "./styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useUser from "../../hooks/useUser";
import { CardMedia } from "@mui/material";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  background:
    "radial-gradient(circle at 50% 50%,rgba(59, 57, 78, 1), rgba(156, 127, 127, 0.95), rgba(71, 23, 23, 1), rgba(0, 0, 0, 0.95))",
  border: "2px solid #000",
  boxShadow: 24,
  p: "40px 56px 45px 55px",
};

export default function BasicModal() {
  const { open, handleClose, selectedHeroes, combinedHeroStats } = useUser();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-title">
            <p>Winner</p>
            <p>
              {combinedHeroStats.firstHero > combinedHeroStats.secondHero
                ? selectedHeroes[0].name
                : selectedHeroes[1].name}
            </p>
          </div>
          <div className="modal-content">
            <div className="first-hero">
              <img src={selectedHeroes[0].images.lg} alt="first-hero" />
              <p>{selectedHeroes[0].name}</p>
            </div>
            <div className="heroes-stats">
              <div className="hero1-stats">
                <div className="hero1-intelligence">
                  <p>{selectedHeroes[0].powerstats.intelligence}</p>
                  <img
                    src={
                      selectedHeroes[0].powerstats.intelligence >
                      selectedHeroes[1].powerstats.intelligence
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                </div>
                <div className="hero1-strength">
                  <p>{selectedHeroes[0].powerstats.strength}</p>
                  <img
                    src={
                      selectedHeroes[0].powerstats.strength >
                      selectedHeroes[1].powerstats.strength
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                </div>
                <div className="hero1-speed">
                  <p>{selectedHeroes[0].powerstats.speed}</p>
                  <img
                    src={
                      selectedHeroes[0].powerstats.speed >
                      selectedHeroes[1].powerstats.speed
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                </div>
                <div className="hero1-durability">
                  <p>{selectedHeroes[0].powerstats.durability}</p>
                  <img
                    src={
                      selectedHeroes[0].powerstats.durability >
                      selectedHeroes[1].powerstats.durability
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                </div>
                <div className="hero1-power">
                  <p>{selectedHeroes[0].powerstats.power}</p>
                  <img
                    src={
                      selectedHeroes[0].powerstats.power >
                      selectedHeroes[1].powerstats.power
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                </div>
                <div className="hero1-combat">
                  <p>{selectedHeroes[0].powerstats.combat}</p>
                  <img
                    src={
                      selectedHeroes[0].powerstats.combat >
                      selectedHeroes[1].powerstats.combat
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="stats-type">
                <p>Intelligence</p>
                <p>Strength</p>
                <p>Speed</p>
                <p>Durability</p>
                <p>Power</p>
                <p>Combat</p>
              </div>
              <div className="hero2-stats">
                <div className="hero2-intelligence">
                  <img
                    src={
                      selectedHeroes[1].powerstats.intelligence >
                      selectedHeroes[0].powerstats.intelligence
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                  <p>{selectedHeroes[1].powerstats.intelligence}</p>
                </div>
                <div className="hero2-strength">
                  <img
                    src={
                      selectedHeroes[1].powerstats.strength >
                      selectedHeroes[0].powerstats.strength
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                  <p>{selectedHeroes[1].powerstats.strength}</p>
                </div>
                <div className="hero2-speed">
                  <img
                    src={
                      selectedHeroes[1].powerstats.speed >
                      selectedHeroes[0].powerstats.speed
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                  <p>{selectedHeroes[1].powerstats.speed}</p>
                </div>
                <div className="hero2-durability">
                  <img
                    src={
                      selectedHeroes[1].powerstats.durability >
                      selectedHeroes[0].powerstats.durability
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                  <p>{selectedHeroes[1].powerstats.durability}</p>
                </div>
                <div className="hero2-power">
                  <img
                    src={
                      selectedHeroes[1].powerstats.power >
                      selectedHeroes[0].powerstats.power
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                  <p>{selectedHeroes[1].powerstats.power}</p>
                </div>
                <div className="hero2-combat">
                  <img
                    src={
                      selectedHeroes[1].powerstats.combat >
                      selectedHeroes[0].powerstats.combat
                        ? ArrowUp
                        : ArrowDown
                    }
                    alt="arrow"
                  />
                  <p>{selectedHeroes[1].powerstats.combat}</p>
                </div>
              </div>
            </div>
            <div className="second-hero">
              <img src={selectedHeroes[1].images.lg} alt="second-hero" />
              <p>{selectedHeroes[1].name}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
