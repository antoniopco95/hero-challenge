import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PlanetIcon from "../../assets/planet-icon.svg";
import useUser from "../../hooks/useUser";

export default function PlanetButton() {
  const { showCards, setShowCards } = useUser();
  const startGame = () => {
    setShowCards(!showCards);
  };
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={startGame}
        variant="contained"
        disableElevation
        startIcon={<img src={PlanetIcon} alt="Planet" width="20" height="20" />}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          bgcolor: "#4747d1",
          width: "180px",
          borderRadius: "10px",
          marginRight: "100px",
          fontFamily: "Outfit, sans-serif",
          textTransform: "none",
          "&:hover": {
            bgcolor: "#4747d1",
          },
        }}
      >
        Cartas
      </Button>
    </Stack>
  );
}
