var restify = require('restify')
var apistatus = require('apistatus')

var server = restify.createServer()

server.use(restify.CORS())
server.use(restify.queryParser())

server.get('/', function (req, res, next) {
  var url = req.params.url
  apistatus(url, function(status){
    res.send(status)
    next()
  })
})

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url)
})
