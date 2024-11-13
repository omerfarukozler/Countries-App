import {
    Route,
    Routes,
} from 'react-router-dom';
import CountriesDetail from './Countries/CountriesDetail/CountriesDetail';
import Countries from './Countries';

function MainRouters() {
    return (
        <Routes>
            <Route path='/' exact element={<Countries/>} />
            <Route path="/detail/:countryName" element={<CountriesDetail />} />
        </Routes>
    )
}

export default MainRouters