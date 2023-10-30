import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "../../assets/search-icon.svg";

export default function InputSearch() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
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
