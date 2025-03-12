import { Box, Paper, Typography } from "@mui/material";

interface MessageProps {
  text: string;
}

export default function SystemMessage({ text }: MessageProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        mb: 1,
      }}
    >
      <Box sx={{ height: "24px", width: "24px" }}></Box>
      <Box>
        <Paper
          sx={{
            p: 1.5,
            bgcolor: "secondary.light",
            color: "text.primary",
            borderRadius: "12px 12px 12px 0px",
          }}
        >
          <Typography variant="body2">{text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
}
