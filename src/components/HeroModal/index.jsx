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
            {combinedHeroStats.firstHero > combinedHeroStats.secondHero
              ? selectedHeroes[0].name
              : selectedHeroes[1].name}
          </div>
          <div className="modal-content">
            <div className="first-hero">
              <img src={selectedHeroes[0].images.lg} alt="first-hero" />
              {selectedHeroes[0].name}
            </div>
            <div className="heroes-stats">
              <div className="hero1-stats">
                <p>{selectedHeroes[0].powerstats.intelligence}</p>
                <p>{selectedHeroes[0].powerstats.strength}</p>
                <p>{selectedHeroes[0].powerstats.speed}</p>
                <p>{selectedHeroes[0].powerstats.durability}</p>
                <p>{selectedHeroes[0].powerstats.power}</p>
                <p>{selectedHeroes[0].powerstats.combat}</p>
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
                <p>{selectedHeroes[1].powerstats.intelligence}</p>
                <p>{selectedHeroes[1].powerstats.strength}</p>
                <p>{selectedHeroes[1].powerstats.speed}</p>
                <p>{selectedHeroes[1].powerstats.durability}</p>
                <p>{selectedHeroes[1].powerstats.power}</p>
                <p>{selectedHeroes[1].powerstats.combat}</p>
              </div>
            </div>
            <div className="second-hero">
              <img src={selectedHeroes[1].images.lg} alt="second-hero" />
              {selectedHeroes[1].name}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
