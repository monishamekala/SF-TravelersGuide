import axios from 'axios';
import Constants from '../Constants';

const CountryService = {
    getAllCountries: async function() {
        try{
            const response = await axios.get(process.env.REACT_APP_API_URL.concat(Constants.countryAPI.getAllCountriesAPI));
            return response.data;
        }catch (err){
            console.log(err);
        }
    }
}

export default CountryService;