import axios from 'axios';
import Constants from '../Constants';

const CityService = {
    getAllCitites: async function(){
        try{            
            const response = await axios.get(process.env.REACT_APP_API_URL.concat(Constants.cityAPI.getAllCitiesAPI));
            return response.data;
        }catch(err){
            console.log(err);
        }
    },
    getCityByCountryCode: function (countryCode) {
        const lstcities = axios.get(process.env.REACT_APP_API_URL.concat(Constants.cityAPI.getCitiesbyCountryCode.concat(countryCode)))
        .then((response) => {
            return response.data;
        }).catch((err) => {
            console.log(err.message);
        });
        return lstcities;
    },
    getCityByCityName: function (name) {
        try{
            const CitySearchResults = axios.get(process.env.REACT_APP_API_URL.concat(Constants.cityAPI.getCitiesByCityName.concat(name)))
            return CitySearchResults.data;
        }catch(err){
            console.log(err);
        }
    }
}

export default CityService;