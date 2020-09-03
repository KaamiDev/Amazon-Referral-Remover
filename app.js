// require modules
const Deshortifier = require('deshortify');
const axios = require('axios');

// create new deshortifier instance
let deshortifier = new Deshortifier({ verbose: false });

// declare remove function
const removeReferral = (url) => {
	return new Promise((resolve) => {
		// use deshortifier to unshorten url
		deshortifier.deshortify(url).then((u) => {
			// return new url to remove all query strings
			resolve(u.split('?')[0]);
		});
	});
};

// export remove function
module.exports = removeReferral;
