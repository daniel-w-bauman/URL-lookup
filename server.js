const express = require('express')
const app = express()

const bannedUrls = [
	'virus.com',
	'verybad.org',
	'freemoney.scam'
]

app.get('/v1/urlinfo/:url', (req, res) => {
	console.log(req.params)
	if(bannedUrls.includes(req.params.url.toLowerCase().split('/')[0])) {
		res.end('<h1>banned</h1>')
	} else {
		res.end('<h1>allowed</h1>')
	}
})

app.listen(3000)
console.log('Listening on http://localhost:3000')
