import axios from "axios";
import Constants from "../Constants";

const AttractionService = {
    getAllAttractions: function () {
        const lstattractions = axios.get(process.env.REACT_APP_API_URL.concat(Constants.attractionAPI.getAllAttractionsAPI))        
        .then((response) => {            
            return response.data;
        })
        .catch((error) => {            
            console.log(error.message);
        });
        return lstattractions;
    },
    searchAttraction: function () {
        //Here goes the axios call to backend
    }
}

export default AttractionService;