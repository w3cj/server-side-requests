const ezc = require('express-zero-config');
const request = require('request');
const fetch = require('node-fetch');
const cors = require('cors');

const router = ezc.createRouter();

// const getPlaces = require('./google').getPlaces;
const {getPlaces} = require('./google');

router.use(cors());

router.get('/reddit', (req, res, next) => {
	request('https://www.reddit.com/r/funny.json', function(err, result, body) {
	    console.log(body);
			const json = JSON.parse(body);
			res.json(json);
	});
});

router.get('/fetchReddit', (req, res) => {
	fetch('https://www.reddit.com/r/funny.json')
	    .then(function(res) {
	        return res.json();
	    }).then(function(json) {
	        res.json(json);
	    });
});

router.get('/places', (req, res) => {
	getPlaces(req.query.type)
		.then(json => {
			res.json(json);
		})
});

ezc.startServer(router);
