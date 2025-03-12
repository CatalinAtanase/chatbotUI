import { Paper, Box } from "@mui/material";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";

function Chatbot({ onClose }: { onClose: () => void }) {
  return (
    <Paper
      elevation={4}
      sx={(theme) => ({
        width: "75%",
        position: "absolute",
        bottom: "10px",
        right: "10px",
        height: "70%",
        [theme.breakpoints.up("sm")]: {
          width: "650px",
        },
      })}
    >
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <ChatbotHeader onClose={onClose} />
        <ChatbotContent />
        <ChatbotFooter />
      </Box>
    </Paper>
  );
}

export default Chatbot;
