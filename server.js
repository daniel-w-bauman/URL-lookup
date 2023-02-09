const express = require('express')
const app = express()

app.use(express.json())

let bannedUrls = [
	'virus.com',
	'verybad.org',
	'freemoney.scam'
]

app.get('/v1/urlinfo/:url', (req, res) => {
	console.log(req.params)
	if(bannedUrls.includes(req.params.url.toLowerCase().split('/')[0])) {
		res.status(200).end('banned')
	} else {
		res.status(200).end('allowed')
	}
})

app.post('/v1/newurl', (req, res) => {
	console.log(req.body)
	if('url' in req.body) {
		bannedUrls.push(req.body.url)
		res.status(200).end('Success')
	} else {
		res.status(400).end('Missing url')
	}	
})

app.listen(3000, () => {
	console.log('Listening on http://localhost:3000')
})
