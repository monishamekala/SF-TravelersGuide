const Constants = {
    attractionPaths: {
        main: '/attraction',
        create: '/createattraction',
        edit: '/editattraction',
        view: '/viewattraction'
    },
    attractionAPI: {
        //Attraction APIs
        getAllAttractionsAPI: '/api/attraction/getallattractions',
        searchAttractionsAPI: '/api/attraction/searchattraction',
        createAttractionAPI: '/api/attraction/createattraction',
        editAttractionAPI: '/api/attraction/editattraction',
        deleteAttractionAPI: '/api/attraction/deleteattraction'
    },
    cityAPI: {
        getAllCitiesAPI: '/api/city/getallcities',
        searchCityAPI: '/api/city/searchcity',
        getCitiesbyCountryCode: '/api/city/getcitiesbycountrycode?code='
    },
    countryAPI: {
        getAllCountriesAPI: '/api/country/getallcountries'
    }
}

export default Constants;