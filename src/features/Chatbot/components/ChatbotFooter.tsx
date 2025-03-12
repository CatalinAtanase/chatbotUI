import { Box, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


export default function ChatbotFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid #ddd",
        bgcolor: "background.paper",
        opacity: 0.6,
        cursor: "not-allowed",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
          bgcolor: "grey.200",
          padding: 1.2,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Typography variant="body1" color="text.primary">
          Please pick an option
        </Typography>
        <IconButton
          disabled
          sx={(theme) => ({ color: theme.palette.text.primary })}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
