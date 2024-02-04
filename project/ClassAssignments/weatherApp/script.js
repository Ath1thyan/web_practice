

const locationInput = document.getElementById('location-input')
let data;


async function search(place) {
    const geoNameApi = `http://api.geonames.org/postalCodeSearchJSON?placename_startsWith=${place}&maxRows=10&username=arun&country=IN`
    
    
    try{
        const placeResult = await fetch(geoNameApi);
        data = await placeResult.json();

    }
    
    catch(error){
        console.log("An error occured", error);
    };
    
    let results = data.geonames[0]; 
    console.log(results);

    if (!results) {
        alert("No Place Found");
        return;
    }
}