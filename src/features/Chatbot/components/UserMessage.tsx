import { Box, Paper, Typography } from "@mui/material";

interface UserMessageProps {
  text: string;
}

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "end",
        mb: 2,
      }}
    >
      <Box>
        <Paper
          sx={{
            p: 1.5,
            bgcolor: "grey.200",
            color: "text.primary",
            borderRadius: "12px 12px 0px 12px",
          }}
        >
          <Typography variant="body2">{text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
}
