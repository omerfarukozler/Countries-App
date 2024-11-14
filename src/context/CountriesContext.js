import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CountriesContext = createContext();


export const CountriesProvider = ({ children }) => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(process.env.REACT_APP_API_ENDPOINT)
            .then(res => {
                setCountries(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const values = {
        countries,
        loading,
        setLoading
    }
    return <CountriesContext.Provider value={values}>{children}</CountriesContext.Provider>
}
export const useCountries = () => useContext(CountriesContext)

