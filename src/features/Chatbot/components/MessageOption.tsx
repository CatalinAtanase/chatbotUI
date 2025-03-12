import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { isDisabled } from "@testing-library/user-event/dist/utils";

interface StockOptionProps {
  text: string;
  code: string;
  onClickHandler: () => void;
  isDisabled?: boolean;
}

const StockOption = ({
  text,
  code,
  onClickHandler,
  isDisabled,
}: StockOptionProps) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Button
        variant="text"
        sx={(theme) => ({
          width: "100%",
          color: "primary",
          background: theme.palette.primary.contrastText,
          margin: "1px",
        })}
        color="primary"
        disabled={isDisabled}
        onClick={onClickHandler}
      >
        {text}
      </Button>
    </Box>
  );
};

export default StockOption;
