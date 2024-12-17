import { Box, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCountries } from '../../context/CountriesContext';
import styles from "./CountriesDetail.module.css"
import { ThemeContext } from '../../context/ThemeContext';

function CountriesDetail() {
  const { countryName } = useParams();
  const { countries } = useCountries();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  const { isDarkTheme } = useContext(ThemeContext);
  useEffect(() => {
    const selectedCountry = countries.find(c => c.name.common === countryName);
    setCountry(selectedCountry);
  }, [countryName, countries]);

  const goBack = () => {
    navigate('/');
  };

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Card sx={{ maxWidth: 250, alignItems: 'center', justifyContent: 'center' }}>
        <CardMedia
          sx={{ height: 180 }}
          image={country.flags.png}
          title="Country Flag"
        />
        <CardContent>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <i
              style={{
                fontSize: "30px",
                alignItems: "center",
                color: isDarkTheme ? "#fff" : "#000",
              }}
            >
              {country.name.common}
            </i>
          </Box>
          <Box className={styles.card_detail}>
            <p style={{ color: isDarkTheme ? "#fff" : "#000" }}>
              Capital: {country.capital ? country.capital : "N/A"}
            </p>
            <p style={{ color: isDarkTheme ? "#fff" : "#000" }}>
              Continents: {country.continents ? country.continents.join(", ") : "N/A"}
            </p>
            <p style={{ color: isDarkTheme ? "#fff" : "#000" }}>
              Languages: {Object.values(country.languages).join(", ")}
            </p>
            <p style={{ color: isDarkTheme ? "#fff" : "#000" }}>
              Currencies:{" "}
              {Object.values(country.currencies).map((currency, index) => (
                <span key={index}>
                  {currency.name} ({currency.symbol})
                </span>
              ))}
            </p>
            <p style={{ color: isDarkTheme ? "#fff" : "#000" }}>
              Independent: {country.independent === false ? "No" : "Yes"}
            </p>
          </Box>
        </CardContent>

        <CardActions style={{ justifyContent: "center" }}>
          <Button
            onClick={() => window.open(country.maps.googleMaps, "_blank")}
            size="small"
            style={{
              color: isDarkTheme ? "#fff" : "#3168d5",
              border: isDarkTheme ? "1px solid #c3c9c9" : "none",
              backgroundColor: isDarkTheme ? "#424242" : "#f0f0f0",
              marginBottom: 15
            }}
          >
            Go to Map
          </Button>
        </CardActions>

        <Box component="section">
          <Button
            onClick={goBack}
            sx={{
              minWidth: 80,
              minHeight: 20,
              marginLeft: 6,
              marginBottom: 5,
              backgroundColor: isDarkTheme ? "#616161" : "primary.main",
              color: isDarkTheme ? "#fff" : "#fff",
            }}
            variant="contained"
          >
            Click to go back
          </Button>
        </Box>

      </Card>
    </Box>
  );
}

export default CountriesDetail;
