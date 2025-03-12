import {
  Action,
  ChatMessage,
  StockExchangeData,
} from "./../types/chatbotTypes";

export const createBotMessage = (
  message: string,
  options?: StockExchangeData[],
  action?: Action
): ChatMessage => {
  return {
    id: Math.random().toString(36).substring(7),
    text: message,
    sender: "bot",
    options,
    action,
  };
};

const menuOptions = [
  { name: "Main Menu", code: "mainMenu" },
  { name: "Go Back", code: "goBack" },
];

export const createStockExchangeMessage = (options: StockExchangeData[]) =>
  createBotMessage("Please select a Stock Exchange", options, "stockExchange");

export const createStockOptionMessage = (options: StockExchangeData[]) =>
  createBotMessage("Please select a stock", options, "stockOption");

export const createStockSelectedMessage = (stockName: string, price: number) =>
  createBotMessage(
    `Stock price of ${stockName} is ${price}. Please select an option.`,
    menuOptions,
    "menu"
  );

export const createBotErrorMessage = () =>
  createBotMessage("Something went wrong, please retry later.");

export const createLoadingMessage = () => createBotMessage("Loading...");

export const createUserMessage = (message: string): ChatMessage => {
  return {
    id: Math.random().toString(36).substring(7),
    text: message,
    sender: "user",
  };
};
