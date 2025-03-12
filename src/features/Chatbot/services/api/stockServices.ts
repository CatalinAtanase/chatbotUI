import stockExchangeData from "../../../../data/Chatbot - stock data.json";
import { simulateRequestTime } from "../../../../utils/simulateHTTPWaitTime";
import { StockExchangeDataAPI } from "./../../types/chatbotTypes";

export const getStockExchangeData = async (): Promise<
  StockExchangeDataAPI[]
> => {
  return new Promise((resolve, reject) => {
    const requestTime = simulateRequestTime();
    setTimeout(() => {
      // simulate reject
      if (requestTime > 1200) reject();
      resolve(stockExchangeData);
    }, requestTime);
  });
};
