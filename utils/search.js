const {urlExists, insertUrl, closeClient} = require('./mongoDriver')

// Formats url
// returns url stripped of http:// or https:// and of query arguments
function formatUrl(url) {
	if (url.includes('http://') || url.includes('https://')) {
		url = url.split('://')[1]
	}
	if (url.includes('www.')) {
		url = url.split('www.')[1]
	}
	return url.toLowerCase().split('/')[0]
}

// Checks if url is banned
// params:
//	url - the url to be searched
// returns true if the url is banned, false otherwise.
async function isUrlBanned(url) {
	return urlExists(formatUrl(url))
}

// Attempts to add url to list of banned urls
// params:
//	url - at least 3 char long, and contains at least one "."
// returns true if url is valid, and added to the list; otherwise returns false.
function addUrl(url) {
	const rootUrl = formatUrl(url)
	if (rootUrl.length > 3 && rootUrl.includes('.')) {
		return insertUrl(rootUrl)
	}
	return null
}

module.exports = {formatUrl, isUrlBanned, addUrl}
