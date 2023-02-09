const assert = require('assert')
const {formatUrl, isUrlBanned, addUrl} = require('../utils/search')

function testFormatUrl() {
	url1 = 'google.com'
	url2 = 'http://wikipedia.org'
	url3 = 'https://cnn.com'
	url4 = 'facebook.com/index.html'
	url5 = 'http://www.wikipedia.org/test'
	url6 = 'http://'
	url7 = 'abc'
	url8 = 'www.docs.Google.com'

	assert(formatUrl(url1) === 'google.com')
	assert(formatUrl(url2) === 'wikipedia.org')
	assert(formatUrl(url3) === 'cnn.com')
	assert(formatUrl(url4) === 'facebook.com')
	assert(formatUrl(url5) === 'wikipedia.org')
	assert(formatUrl(url6) === '')
	assert(formatUrl(url7) === 'abc')
	assert(formatUrl(url8) === 'docs.google.com')
}

function isUrlBannedTest() {
	url1 = 'www.virus.com'
	url2 = 'http://verybad.org'
	url3 = 'https://freemoney.scam/index.html'
	url4 = 'http://www.google.com'

	assert(isUrlBanned(url1))
	assert(isUrlBanned(url2))
	assert(isUrlBanned(url3))
	assert(!isUrlBanned(url4))
}

function addUrlTest() {
	url1 = 'malware.io'
	url2 = 'http://www.worm.org/virus'
	url3 = 'a.'
	url4 = 'http://wwwwww'

	assert(addUrl(url1))
	assert(addUrl(url2))
	assert(!addUrl(url3))
	assert(!addUrl(url4))

	assert(isUrlBanned(url1))
	assert(isUrlBanned(url2))
}

testFormatUrl()
isUrlBannedTest()
addUrlTest()
console.log('Finished tests successfully.')
