import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const Continents = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
]

function TabsPanel({ onContinentSelect }) {
    const [activeContinent, setActiveContinent] = useState("ALL");
    const handleContinentClick = (continent) => {
        onContinentSelect(continent)
        setActiveContinent(continent)
    };
    return (
        <Box>
            {
                Continents.map((continent, key) => (
                    <Box
                        key={key}
                        onClick={() => handleContinentClick(continent)}
                        style={{ display: "inline-block", marginLeft: 4 }}>
                        <Button style={{
                            color: "#fff", padding: "10px 20px",
                            margin: "0 5px",
                            border: "none",
                            marginLeft:50,
                            borderBottom: activeContinent === continent ? "3px solid #fff" : "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                        >
                            {continent}
                        </Button>
                    </Box>
                ))
            }
        </Box>
    )
}

export default TabsPanel
