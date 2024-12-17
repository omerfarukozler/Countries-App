import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./TabsPanel.module.css";

const Continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

function TabsPanel({ onContinentSelect }) {
  const [activeContinent, setActiveContinent] = useState("ALL");
  const handleContinentClick = (continent) => {
    onContinentSelect(continent);
    setActiveContinent(continent);
  };
  return (
    <Box className={styles.tabs}>
      {Continents.map((continent, key) => (
        <Box key={key} onClick={() => handleContinentClick(continent)}>
          <Button
            style={{
              color: "#fff",
              margin: "10px 25px",
              border: "none",
              borderBottom:
                activeContinent === continent ? "3px solid #fff" : "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {continent}
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default TabsPanel;
