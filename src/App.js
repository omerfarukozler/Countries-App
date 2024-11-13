import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider} from "./context/CountriesContext";
import MainRouters from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CountriesProvider>
          <MainRouters/>
        </CountriesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

