import Box from "@mui/material/Box";
import ChatbotFAB from "./features/Chatbot/components/ChatbotFAB";

function App() {
  return (
    <main>
      <Box sx={{ height: "100vh", position: "relative" }}>
        <Box
          sx={{
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Hello
        </Box>
        <ChatbotFAB />
      </Box>
    </main>
  );
}

export default App;
