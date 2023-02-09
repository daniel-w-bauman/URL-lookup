const {formatUrl, isUrlBanned, addUrl} = require('./utils/search')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/v1/urlinfo/:url', (req, res) => {
	isUrlBanned(req.params.url).then(isBanned => {
		if(isBanned) {
			res.status(200).end('banned')
		} else {
			res.status(200).end('allowed')
		}
	}).catch(err => {
		res.status(500).end('error')
	})
})

app.post('/v1/newurl', (req, res) => {
	if('url' in req.body) {
		result = addUrl(req.body.url)
		if (result == null) {
			res.status(400).end('Url must be longer than 3 characters and contain a period.')
		} else {
			result.then(dbresponse => {
				console.log(dbresponse)
				res.status(200).end('Success')
			})
		}
	} else {
		res.status(400).end('Missing url')
	}
})

app.listen(3000, () => {
	console.log('Listening on http://localhost:3000')
})
