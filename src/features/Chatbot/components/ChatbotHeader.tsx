import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";


function ChatbotHeader({ onClose }: { onClose: () => void }) {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        padding: 1,
      })}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SmartToyIcon
          sx={(theme) => ({ color: theme.palette.primary.contrastText })}
        />
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.primary.contrastText, paddingLeft: 1 })}
        >
          LSEG Chatbot
        </Typography>
      </Box>
      <IconButton
        onClick={onClose}
        sx={(theme) => ({ color: theme.palette.primary.contrastText })}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default ChatbotHeader;
