// require modules
const Deshortifier = require('deshortify');
const axios = require('axios');

// create new deshortifier instance
let deshortifier = new Deshortifier({ verbose: false });

// export remove function
const removeReferral = (url) => {
	return new Promise((resolve) => {
		// use deshortifier to unshorten url
		deshortifier.deshortify(url).then((u) => {
			// return new url to remove all query strings
			resolve(u.split('?')[0]);
		});
	});
};

module.exports = removeReferral;
