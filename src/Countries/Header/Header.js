import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import HamburgerMenu from "../../components/HamburgerMenu";
import TabsPanel from "../../components/TabsPanel";
import styles from "../Header/Header.module.css";
import { GiWorld } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from "../../context/ThemeContext";
function Header({
  setFilterText,
  filterText,
  onContinentSelect,
  selectedContinent,
}) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:1100px)");
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    navigate("/");
  };


  return (
    <Box
      className={styles.header}
      style={{
        backgroundColor: isDarkTheme ? "#424545" : "#3168d5",
      }}
    >
      <Box
        onClick={handleClick}
        style={{
          width: 80,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 25,
          backgroundColor: "#fff",
          borderRadius: 30,
          fontSize: 35,
          color: "#3168d5",
          cursor: "pointer",
        }}
      >
        <GiWorld />
        <Typography>CoAp</Typography>
      </Box>

      <SearchBar
        className={styles.searchBar}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Box>
        {isMobile && (
          <Grid item>
            <HamburgerMenu
              onContinentSelect={onContinentSelect}
              selectedContinent={selectedContinent}
            />
          </Grid>
        )}
        {!isMobile && <TabsPanel onContinentSelect={onContinentSelect} />}
      </Box>
      <Box>
        {!isDarkTheme ? (
          <CiDark
            className={styles.dark}
            onClick={toggleTheme}
            style={{
              fontSize: 25,
              marginRight: 15,
              cursor: "pointer",
              color: "#fff",
            }}
          />
        ) : (
          <CiLight
            className={styles.light}
            onClick={toggleTheme}
            style={{
              fontSize: 25,
              marginRight: 15,
              cursor: "pointer",
              color: "#fff",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
Header.propTypes = {
  setFilterText: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  onContinentSelect: PropTypes.func.isRequired,
  selectedContinent: PropTypes.string.isRequired,
};

export default Header;
