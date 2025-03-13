
# Chatbot UI Project

## Overview

The Chatbot UI project is a React application bootstrapped with Create React App. It features an interactive chatbot interface built with Material UI. The chatbot simulates conversations about stock exchange data by displaying messages, interactive options, and error/loading states.

## Project Structure

- **public/** Contains static assets such as [index.html](public/index.html), icons, the manifest ([manifest.json](public/manifest.json)) and json data.
- **src/** Main source directory containing:

  - **App.tsx**The root component that renders the main layout along with the chatbot.
  - **index.tsx**Entry point that bootstraps the React app.
  - **features/Chatbot/** Contains all chatbot-specific code:
    - **components/**:
      - [`BotMessage.tsx`](src/features/Chatbot/components/BotMessage.tsx) – Renders bot messages with interactive options.
      - [`Chatbot.tsx`](src/features/Chatbot/components/Chatbot.tsx) – Main container for the chatbot UI including header, content, and footer.
      - [`ChatbotContent.tsx`](src/features/Chatbot/components/ChatbotContent.tsx) – Displays conversation messages, including bot and user messages.
      - [`ChatbotFAB.tsx`](src/features/Chatbot/components/ChatbotFAB.tsx) – Floating Action Button to toggle the chatbot display.
      - [`ChatbotHeader.tsx`](src/features/Chatbot/components/ChatbotHeader.tsx) – Header for the chatbot with title and close button.
      - [`ChatbotFooter.tsx`](src/features/Chatbot/components/ChatbotFooter.tsx) – Footer with an instruction message and a disabled send icon.
      - [`MessageOption.tsx`](src/features/Chatbot/components/MessageOption.tsx) – Button component for each selectable option in bot messages.
      - [`Message.tsx`](src/features/Chatbot/components/Message.tsx) – Renders system messages.
      - [`UserMessage.tsx`](src/features/Chatbot/components/UserMessage.tsx) – Renders messages sent by the user.
    - **hooks/**:
      - [`useChatbot.ts`](src/features/Chatbot/hooks/useChatbot.ts) – Custom hook managing chatbot state, data fetching, and scroll behavior.
    - **services/**:
      - [`createMessages.ts`](src/features/Chatbot/services/createMessages.ts) – Contains functions to create various chatbot messages.
      - **api/**:
        - [`stockServices.ts`](src/features/Chatbot/services/api/stockServices.ts) – Simulated API service to fetch stock exchange data.
    - **types/**:
      - [`chatbotTypes.ts`](src/features/Chatbot/types/chatbotTypes.ts) – TypeScript definitions for messages, actions, and stock data.
- **theme/** Contains Material UI theme configuration ([theme.ts](src/theme/theme.ts)).
- **utils/** Utility functions:

  - [`generateRandomID.ts`](src/utils/generateRandomID.ts) – Generates random IDs for messages.
  - [`simulateHTTPWaitTime.ts`](src/utils/simulateHTTPWaitTime.ts) – Simulates wait times for API requests.
  - [`simulateRequestFailure.ts`](src/utils/simulateRequestFailure.ts) – Simulates occasional API request failures.
- **Configuration Files**

  - `.gitignore` – Git exclusion rules.
  - `package.json` – Project dependencies and scripts.
  - `tsconfig.json` – TypeScript compiler configuration.

## How to Run the Project

### Prerequisites

- **Node.js** (v20.0.0 was used)
- **npm** (v9.6.4 was used)

### Installation

1. **Clone the repository.**
2. **Navigate to the project directory.**
3. **Install dependencies:**

   ```sh
   npm install
   ```

### Running in Development Mode

Start the development server with:

```sh
npm start
```
