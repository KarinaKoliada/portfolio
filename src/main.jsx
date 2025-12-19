import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import { CategoryProvider } from "./components/Contexts/CategoryContext";
import { MyProvider } from "./components/Contexts/Contexts";
import { LangProvider } from "./components/Contexts/LangContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <CategoryProvider>
        <MyProvider>
          <LangProvider>
            <App />
          </LangProvider>
        </MyProvider>
      </CategoryProvider>
    </HashRouter>
  </React.StrictMode>
);
