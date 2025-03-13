import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Box, Paper, Typography } from "@mui/material";
import { Action, StockExchangeData } from "../types/chatbotTypes";
import MessageOption from "./MessageOption";

interface BotMessageProps {
  text: string;
  options: StockExchangeData[];
  action: Action;
  onClickHandler: (action: Action, code: string) => void;
  isDisabled: boolean;
}

export default function BotMessage({
  text,
  options,
  action,
  onClickHandler,
  isDisabled,
}: BotMessageProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        width: "100%",
        mb: 2,
      }}
    >
      <Box sx={{ height: "24px", width: "24px" }}>
        <SmartToyIcon sx={{ color: "secondary.light", pr: 0.3 }} />
      </Box>

      <Box sx={{ width: "70%" }}>
        <Paper
          sx={{
            width: "100%",
            flex: 1,
            p: 1.5,
            bgcolor: "secondary.light",
            color: "text.primary",
            borderRadius: "12px 12px 0px",
          }}
        >
          <>
            <Typography variant="body2">{text}</Typography>
            {options &&
              options.map((option) => (
                <Box
                  key={option.code}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MessageOption
                    text={option.name}
                    onClickHandler={() => onClickHandler(action, option.code)}
                    isDisabled={isDisabled}
                  />
                </Box>
              ))}
          </>
        </Paper>
      </Box>
    </Box>
  );
}
