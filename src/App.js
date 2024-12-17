import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./context/CountriesContext";
import MainRouters from "./routes";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeContextProvider>
          <CountriesProvider>
            <MainRouters />
          </CountriesProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
