import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "../../assets/search-icon.svg";
import useUser from "../../hooks/useUser";

export default function InputSearch() {
  const { searchHero, setSearchHero, heroes } = useUser();
  const handleInputChange = (e) => {
    setSearchHero(e.target.value);
  };

  const filtredHeroes = heroes
    ? heroes.filter((item) => item.name === searchHero)
    : [];
  console.log(filtredHeroes);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        value={searchHero}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={SearchIcon} alt="search-icon" height={20} width={20} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            border: "1px solid #4747d1",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #4747d1",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #4747d1",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: "1px solid #4747d1",
            },
          "& .MuiOutlinedInput-input": {
            color: "#fff",
          },
        }}
        variant="outlined"
      />
    </Box>
  );
}
