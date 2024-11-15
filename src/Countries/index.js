import React, { useState } from 'react'
import Header from './Header/Header'
import { useCountries } from '../context/CountriesContext';
import CountriesList from './CountriesList/CountriesList'

function Countries() {
    const { countries, loading, setLoading } = useCountries()
    const [filterText, setFilterText] = useState('')
    const [continentFilter, setContinentFilter] = useState('')

    const handleContinentSelect = (continent) => {
        setContinentFilter(continent === 'All' ? '' : continent)
    }

    const filteredCountries = countries
        .filter((country) => country.name.common.toLowerCase().includes(filterText.toLowerCase()))
        .filter((country) => continentFilter ? country.region === continentFilter : true);
    return (
        <>
            <Header
                setFilterText={setFilterText}
                filterText={filterText}
                onContinentSelect={handleContinentSelect}
                selectedContinent={continentFilter}
            />
            <CountriesList
                loading={loading}
                setLoading={setLoading}
                countries={filteredCountries}
            />
        </>
    )
}

export default Countries
