import axios from 'axios';

const CityService = {
    getAllCitites: async function(){
        try{
            const getCitiesURL = "/api/city/getallcities";
            const response = await axios.get(process.env.REACT_APP_API_URL.concat(getCitiesURL));
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
}

export default CityService;