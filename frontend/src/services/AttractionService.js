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
    },
    createAttraction: function (new_attraction) {
        const create_attraction = axios.post(process.env.REACT_APP_API_URL.concat(Constants.attractionAPI.createAttractionAPI), 
        {
            name: new_attraction.name,
            description: new_attraction.description,
            comments: new_attraction.comments,
            city_id: new_attraction.city_id,
            country_id: new_attraction.country_id
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            return response.data;
        }).catch((err) => {
            console.log(err.message);
        });
        return create_attraction;
    }
}

export default AttractionService;