import { Box } from "@mui/material";
import React from "react";
import { useChatbot } from "../hooks/useChatbot";
import BotMessage from "./BotMessage";
import Message from "./Message";
import UserMessage from "./UserMessage";

function ChatbotContent() {
  const { chatMessages, onClickHandler, scrollRef } = useChatbot();
  return (
    <Box sx={{ padding: 2, flex: 1, overflowY: "auto", width: "100%" }}>
      <Message text="Hello! Welcome to LSEG. I'm here to help you." />
      {chatMessages.map((message) => {
        if (message.sender === "bot") {
          return (
            <BotMessage
              key={message.id}
              text={message.text}
              options={message.options ?? []}
              action={message.action!}
              onClickHandler={onClickHandler}
              isDisabled={
                message.id !== chatMessages[chatMessages.length - 1].id
              }
            />
          );
        }
        return <UserMessage key={message.id} text={message.text} />;
      })}
      <Box ref={scrollRef} />
    </Box>
  );
}

export default ChatbotContent;
