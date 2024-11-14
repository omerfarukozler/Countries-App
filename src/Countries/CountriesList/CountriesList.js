import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, Grid, Pagination, Stack, Typography } from '@mui/material'

import PropTypes from 'prop-types'
import Loading from '../../components/Loading/Loading'
import { useLocation, useNavigate } from 'react-router-dom'

function CountriesList({ countries, loading, setLoading }) {
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setCurrentPage(1)
    }, [countries])

    useEffect(() => {
        setLoading(false)
    }, [location.pathname, setLoading])

    const itemsPerPage = 50;
    const totalPages = Math.ceil(countries.length / itemsPerPage)

    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleButtonClick = (country) => {
        setLoading(true)
        setTimeout(() => {
            navigate(`/detail/${country.name.common}`)
        }, 500)

    }

    if (!countries || !countries.length) {
        return null;
    }

    return (
        <div>
            {loading ? <Loading /> : (
                <Grid container spacing={2} style={{ padding: 20 }}>
                    {currentCountries.map((country, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                            <Card style={{ backgroundColor: "#f3f6fa" }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {country.name.common}
                                    </Typography>
                                    <img src={country.flags.png} alt={country.name.common} style={{ width: 120, height: 80 }} />
                                    <Button sx={{ marginTop: 2 }} size='small' onClick={() => handleButtonClick(country)} variant="contained" color="primary" fullWidth>
                                        Click for More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            )}

            <Stack spacing={2} alignItems="center" mt={4} mb={4}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(_, value) => handlePageChange(value)}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    sx={{
                        marginBottom: "15px",
                        "& .MuiPaginationItem-root": {
                            borderColor: "#1976d2",
                            "&:hover": {
                                backgroundColor: "#e3f2fd",
                            },
                            "&.Mui-selected": {
                                backgroundColor: "#1976d2",
                                color: "#fff",
                            },
                        },
                    }}
                />
            </Stack>
        </div>
    )
}
CountriesList.propTypes = {
    countries: PropTypes.array,
    loading: PropTypes.bool,
    setLoading: PropTypes.func
};

export default CountriesList
