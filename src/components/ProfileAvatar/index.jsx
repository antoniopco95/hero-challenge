import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import UserProfile from "../../assets/profile-user.svg";

export default function FallbackAvatars() {
  return (
    <Stack sx={{ gap: "15px", alignItems: "center" }}>
      <Avatar src={UserProfile} />
      <Typography
        sx={{
          color: "#d9d9d9",
          fontFamily: "Bangers, sans-serif",
          fontSize: "20px",
          marginBottom: " 100px",
        }}
      >
        ANTÔNIO OLIVEIRA
      </Typography>
    </Stack>
  );
}
