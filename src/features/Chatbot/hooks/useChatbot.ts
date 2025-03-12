import {
  Action,
  StockExchangeDataAPI,
  TopStock,
} from "./../types/chatbotTypes";
import {
  createBotErrorMessage,
  createLoadingMessage,
  createStockOptionMessage,
  createStockSelectedMessage,
  createUserMessage,
} from "./../services/createMessages";
import { useEffect, useRef, useState } from "react";
import { getStockExchangeData } from "../services/api/stockServices";
import { createStockExchangeMessage } from "../services/createMessages";
import { ChatMessage } from "../types/chatbotTypes";

export const useChatbot = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [stockExchangeData, setStockExchangeData] = useState<
    StockExchangeDataAPI[]
  >([]);
  const [currentTopStocks, setCurrentTopStocks] = useState<TopStock[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setChatMessages([createLoadingMessage()]);
        const data = await getStockExchangeData();
        setStockExchangeData(data);

        setChatMessages([
          createStockExchangeMessage(
            data.map((stock) => ({
              code: stock.code,
              name: stock.stockExchange,
            }))
          ),
        ]);
      } catch (error) {
        setChatMessages([createBotErrorMessage()]);
      }
    };

    fetchData();

    return () => {
      setChatMessages([]);
      setStockExchangeData([]);
      setCurrentTopStocks([]);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  const handleStockExchangeClick = (code: string) => {
    const stock = stockExchangeData.find((stock) => stock.code === code);

    if (stock) {
      const topOptions = stock.topStocks.map((value) => ({
        code: value.code,
        name: value.stockName,
      }));
      const botMessage = createStockOptionMessage(topOptions);
      const userMessage = createUserMessage(stock.stockExchange);
      setChatMessages((prev) => [...prev, userMessage, botMessage]);
      setCurrentTopStocks(stock.topStocks);
    }
  };

  const handleStockOptionClick = (code: string) => {
    const stock = currentTopStocks?.find((topStock) => topStock.code === code);

    if (stock) {
      const botMessage = createStockSelectedMessage(
        stock.stockName,
        stock.price
      );
      const userMessage = createUserMessage(stock.stockName);
      setChatMessages((prev) => [...prev, userMessage, botMessage]);
    }
  };

  const handleMenuOptionClick = (code: string) => {
    if (code === "mainMenu") {
      const userMessage = createUserMessage("Main Menu");
      const botMessage = createStockExchangeMessage(
        stockExchangeData.map((stock) => ({
          code: stock.code,
          name: stock.stockExchange,
        }))
      );
      setChatMessages((prev) => [...prev, userMessage, botMessage]);
    }
    if (code === "goBack") {
      const userMessage = createUserMessage("Go Back");
      const botMessage = createStockOptionMessage(
        currentTopStocks?.map((value) => ({
          code: value.code,
          name: value.stockName,
        })) ?? []
      );
      setChatMessages((prev) => [...prev, userMessage, botMessage]);
    }
  };

  const onClickHandler = (action: Action, code: string) => {
    if (action === "stockExchange") {
      handleStockExchangeClick(code);
    }
    if (action === "stockOption") {
      handleStockOptionClick(code);
    }
    if (action === "menu") {
      handleMenuOptionClick(code);
    }
  };

  return {
    chatMessages,
    onClickHandler,
    scrollRef,
  };
};
