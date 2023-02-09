const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.end("<html><body><h1>Hello World</h1></body></html>")
})

app.listen(3000)
console.log('Listening on http://localhost:3000')
