export type Sender = "user" | "bot" | "system";

export type Action = "stockExchange" | "stockOption" | "menu";

export type ChatMessage = {
  id: string;
  text: string;
  sender: Sender;
  options?: StockExchangeData[]
  action?: Action;
};

export type StockExchangeData = {
  name: string;
  code: string;
};

export type TopStock = {
  code: string;
  stockName: string;
  price: number;
};

export type StockExchangeDataAPI = {
  stockExchange: string;
  code: string;
  topStocks: TopStock[];
};