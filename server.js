var restify = require('restify')
var apistatus = require('apistatus')

// Create our the server app
var server = restify.createServer()

// querystring parser middleware
server.use(restify.queryParser())

// the base url and endpoint 
server.get('/', function (req, res, next) {

  var url = req.params.url

  // check if we're missing the url and if so
  // send back an appropriate error response
  if (!url) {
    res.send(400, {error: "missing target url"})
    next()
    return
  }

  // @todo check if it's a link to a har file
  // and handle that by getting the har body 
  // before putting through apistatus

  // get the data we so desire and return it 
  // to the client in JSON form
  apistatus(url, function(status){
    res.send(status)
    next()
  })

})

// simple healthcheck endpoint
server.get('/marco', function (req, res, next) {
  res.send("polo")
  next()
})

// set a port to listen for the server
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url)
})
