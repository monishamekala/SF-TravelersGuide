const AttractionService = {
    getAllAttractions: function() {
        const lstattractions = fetch('')
        .then(response => response.json())
        .then((data) => {
            return data;
        }).catch((error) => {
            console.log(error.message);
        });
        return lstattractions;
    }
}

export default AttractionService;