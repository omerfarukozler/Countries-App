import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./context/CountriesContext";
import Countries from "./Countries";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CountriesProvider>
          <Countries />
        </CountriesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

