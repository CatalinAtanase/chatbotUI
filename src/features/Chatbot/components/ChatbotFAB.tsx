import { Fab } from "@mui/material";
import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import Chatbot from "./Chatbot";

function ChatbotFAB() {
  const [isOpened, setIsOpened] = useState(false);

  const onClose = () => {
    setIsOpened(false);
  };

  if (!isOpened) {
    return (
      <Fab
        color="primary"
        aria-label="chatbot"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={() => setIsOpened(true)}
      >
        <ChatIcon />
      </Fab>
    );
  }

  return <Chatbot onClose={onClose} />;
}

export default ChatbotFAB;
