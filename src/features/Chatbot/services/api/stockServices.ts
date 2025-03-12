import stockExchangeData from "../../../../data/Chatbot - stock data.json";
import { simulateRequestTime } from "../../../../utils/simulateHTTPWaitTime";
import { simulateRequestFailure } from "../../../../utils/simulateRequestFailure";
import { StockExchangeDataAPI } from "./../../types/chatbotTypes";

export const getStockExchangeData = async (): Promise<
  StockExchangeDataAPI[]
> => {
  return new Promise((resolve, reject) => {
    const requestTime = simulateRequestTime();
    
    setTimeout(() => {
      if(simulateRequestFailure()) reject();
      resolve(stockExchangeData);
    }, requestTime);
  });
};
