import { Box, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCountries } from '../../context/CountriesContext';

function CountriesDetail() {
  const { countryName } = useParams();
  const { countries } = useCountries();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

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
          sx={{ height: 140 }}
          image={country.flags.png}
          title="Country Flag"
        />
        <CardContent>
          <Box component="section" sx={{ p: 2 }}>
            <i style={{ fontSize: '30px', alignItems: 'center' }}>{country.name.common}</i>
          </Box>
          <p>Capital: {country.capital ? country.capital : 'N/A'}</p>
          <p>Continents: {country.continents ? country.continents.join(", ") : 'N/A'}</p>
          <p>Languages: {Object.values(country.languages).join(", ")}</p>
          <p>
            Currencies: {Object.values(country.currencies).map((currency, index) => (
              <span key={index}>{currency.name} ({currency.symbol})</span>
            ))}
          </p>
          <p>Independent: {country.independent === false ? 'No' : 'Yes'}</p>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button onClick={() => window.open(country.maps.googleMaps, '_blank')} size="small">Go to Map</Button>
        </CardActions>
        <Box component="section" sx={{ p: 2 }}>
          <Button onClick={goBack} sx={{ minWidth: 80, minHeight: 20 }} color="primary" variant="contained">
            Click to go back
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default CountriesDetail;
