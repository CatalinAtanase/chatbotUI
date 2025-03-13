import { simulateRequestTime } from "../../../../utils/simulateHTTPWaitTime";
import { simulateRequestFailure } from "../../../../utils/simulateRequestFailure";
import { StockExchangeDataAPI } from "./../../types/chatbotTypes";

export const getStockExchangeData = async (): Promise<
  StockExchangeDataAPI[]
> => {
  return new Promise((resolve, reject) => {
    const requestTime = simulateRequestTime();
    
    setTimeout(async () => {
      if(simulateRequestFailure()) reject();
      try {
        const data = await fetch("/data/Chatbot - stock data.json");
        const json = await data.json();
        resolve(json);
      } catch (error) {
        reject();
      }
    }, requestTime);
  });
};
