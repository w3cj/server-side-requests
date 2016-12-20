const fetch = require('node-fetch');
require('dotenv').config();

const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7579125,-105.0068599&radius=10000';

function getPlaces(type) {
	console.log('type', type);
	let URL = GOOGLE_API_URL;
	if(type) {
		URL += '&type=' + type;
	} else {
		URL += '&type=restaurant'
	}
	URL += `&key=${process.env.GOOGLE_API_KEY}`;
	console.log(URL);
	return fetch(URL)
		.then(function(res) {
				return res.json();
		}).then(function(json) {
				return json;
		});
}

module.exports = {
	getPlaces
}
