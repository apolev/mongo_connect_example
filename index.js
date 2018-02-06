// content of index.js
const http = require('http')
const port = 3000
const Database = require('./database')

const requestHandler = (request, response) => {
    const database = new Database()

    database.loadData(function(data) {
        response.end('Data from callback: ' + JSON.stringify(data))
    })
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})