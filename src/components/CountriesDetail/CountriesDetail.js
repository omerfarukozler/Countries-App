import { Box, Button, Card, CardActions, CardContent, CardMedia} from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
// import CountriesList from '../CountriesList/CountriesList'
// import { useNavigate } from 'react-router-dom'

function CountriesDetail({ country , setSelectedCountry }) {
  // const [back, setBack] = useState(false)
  // const navigate = useNavigate()
  // back'i kullanma router araştır

  // const handleClickBack = () => {
  //   setBack(true)
  // }

  // if (back) {
  //   return <CountriesList />
  // }
  const goBack = () => {
    // if (window.history.length > 1) {
    // navigate(-1);
    // } else {
    //   navigate("/"); 
    // }
    setSelectedCountry()
  };

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
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}></div>
          </Box>
          <p>Capital: {country.capital}</p>
          <p>Continents: {country.continents}</p>
          <p>Languages: {Object.values(country.languages).join(", ")}</p>
          <p>
            Currencies: {Object.values(country.currencies).map((currency, index) => (
              <span key={index}>{currency.name} ({currency.symbol})</span>
            ))}
          </p>
          <p>Independent: {country.independent === false ? 'No' : 'Yes'}</p>
        </CardContent>
        <CardActions style={{justifyContent:"center"}}>
          <Button onClick={() => window.open(country.maps.googleMaps, '_blank')} size="small">Go to Map</Button>
        </CardActions>
        <Box component="section" sx={{ p: 2 }}>
            <Button onClick={goBack} sx={{ minWidth: 80, minHeight: 20 }} color="primary" variant="contained">
              Click to go back
            </Button>
          </Box>
      </Card>
    </Box>
  )
}

CountriesDetail.propTypes = {
  country: PropTypes.array,
  setSelectedCountry: PropTypes.any
}

export default CountriesDetail
