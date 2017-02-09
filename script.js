var DARKSKY_API_URL = 'https://api.darksky.net/forecast/';
var DARKSKY_API_KEY = '8b3d826a8192d73fe0d71085a9b2ab06';
var CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

var GOOGLE_MAPS_API_KEY = 'AIzaSyDr74_EQzm3d2IXWZBCcgHWvy4DThLv9MA';
var GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

function getCoordinatesForCity(cityName){
	var url = `${GOOGLE_MAPS_API_URL}?address=${cityName}&key=${GOOGLE_MAPS_API_KEY}`;

	return(
		.fetch(url)
		.then(response => response.json())
		.then(data => data.result[0].geometry.location)
	);
}