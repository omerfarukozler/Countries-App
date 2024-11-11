import {
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import CountriesList from './src/components/CountriesList/CountriesList';
import CountriesDetail from './src/components/CountriesDetail/CountriesDetail';

function Routers(){
    return(
        <Router>
            <Routes>
            <Route path='/' exact Component={CountriesList}/>
            <Route path='/detail' Component={CountriesDetail}/>
            </Routes>
        </Router>
    )
}

export default Routers