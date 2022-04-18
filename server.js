const express = require('express')
const serverStatic = require('serve-static')
const path = require('path')

const app = express()


//server files from our dist directory which now contains out index.html file
app.use('/', serverStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 3000
app.listen(port)

console.log('Listening on port:'+port)