const {formatUrl, isUrlBanned, addUrl} = require('./utils/search')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/v1/urlinfo/:url', (req, res) => {
	if(isUrlBanned(req.params.url)) {
		res.status(200).end('banned')
	} else {
		res.status(200).end('allowed')
	}
})

app.post('/v1/newurl', (req, res) => {
	if('url' in req.body) {
		if(addUrl(req.body.url)) {
			res.status(200).end('Success')
		} else {
			res.status(400).end('Url must be longer than 3 characters and contain a period.')
		}
	} else {
		res.status(400).end('Missing url')
	}
})

app.listen(3000, () => {
	console.log('Listening on http://localhost:3000')
})
