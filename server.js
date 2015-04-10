var restify = require('restify')
var apistatus = require('apistatus')

var server = restify.createServer()

server.use(restify.queryParser())

server.get('/', function (req, res, next) {
  var url = req.params.url
  if (!url) {
    res.send({error: "missing target url"})
    next()
    return
  }
  apistatus(url, function(status){
    res.send(status)
    next()
  })
})

server.get('/marco', function (req, res, next) {
  res.send("polo")
  next()
})

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url)
})
