// configure env variables
require('dotenv').config();

// require modules
const Deshortifier = require('deshortify');
const axios = require('axios');

// create new deshortifier instance
let deshortifier = new Deshortifier({ verbose: false });

// declare remove function
const removeReferral = (url) => {
	return new Promise((resolve) => {
		// use deshortifier to unshorten url
		deshortifier.deshortify(url).then(async (u) => {
			// declare new url to remove all query strings
			let newUrl = u.split('?')[0];

			// return reshortened affiliate-free url
			resolve(await reshorten(newUrl));
		});
	});
};

// declare reshorten function
const reshorten = (url) => {
	return new Promise((resolve) => {
		// shorten url once again using bit.ly
		axios
			.post(
				'https://api-ssl.bitly.com/v4/shorten',
				{
					long_url: url,
					domain: 'bit.ly',
					group_guid: process.env.GROUP_GUID
				},
				{
					headers: {
						Authorization: 'Bearer ' + process.env.BITLY_TOKEN,
						'Content-Type': 'application/json'
					}
				}
			)
			.then((response) => {
				// return new shortened url
				resolve(response.data.link);
			})
			.catch((err) => {
				// catch and log error(s)
				console.log(err);
			});
	});
};

// export remove function
module.exports = removeReferral;
