const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);
const urls = client.db('ul').collection('urls');

async function urlExists(inputUrl) {
	const query = {url: inputUrl}
	const result = await urls.findOne(query)
	return result != null
}

async function insertUrl(inputUrl) {
	const newDoc = {url: inputUrl}
	const result = await urls.insertOne(newDoc)
	return result
}

module.exports = {urlExists, insertUrl}
