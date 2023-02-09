const assert = require('assert')
const {formatUrl, isUrlBanned, addUrl} = require('../utils/search')
const {urlExists, insertUrl, closeClient} = require('../utils/mongoDriver')

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

async function isUrlBannedTest() {
	url = 'www.virus.com'
	shortened_url = 'virus.com'
	insertUrl(shortened_url).then(res => {
		return isUrlBanned(url)
	}).then(isBanned => {
		assert(isBanned)
		return isBanned
	})
}

async function addUrlTest() {
	url = 'malware.io/example'
	shortened_url = 'malware.io'
	addUrl(url).then(res => {
		return urlExists(shortened_url)
	}).then(isBanned => {
		assert(isBanned)
		return isBanned
	})
}

testFormatUrl()
isUrlBannedTest().then(res => {
	return addUrlTest()
}).then(res => {
	console.log('Finished tests successfully.')
}).catch(err => {
	console.log(err)
})
