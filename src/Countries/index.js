import React, { useState } from 'react'
import Header from './Header/Header'
import { useCountries } from '../context/CountriesContext';
import CountriesList from './CountriesList/CountriesList'

function Countries() {
    const { countries, loading } = useCountries()
    const [filterText, setFilterText] = useState('')
    const filteredCountries = countries.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        );
    });

    return (
        <>
            <Header setFilterText={setFilterText} filterText={filterText} />
            <CountriesList loading={loading} countries={filteredCountries} />
        </>
    )
}

export default Countries
