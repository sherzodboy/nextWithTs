import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Box
      padding={"20px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "navy",
        color: "white",
      }}
    >
      <Typography>
        © {format(new Date(), "yyyy")} All rights reserved
      </Typography>
      <TelegramIcon sx={{cursor: "pointer"}} />
    </Box>
  );
};

export default Footer;
