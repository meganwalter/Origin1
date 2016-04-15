var Forecast = require('forecast.io');

var options = {
  APIKey: process.env.FORECAST_API_KEY
},
forecast = new Forecast(options);

// var time = new Date().setDate(0);
// forecast.getAtTime(latitude, longitude, time, function(err, res, data) {
//   if (err) throw err;
//   log('res: ' + util.inspect(res));
//   log('data: ' + util.inspect(data));
// });

var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

app.get('/github/*', proxyGitHub);

app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile(__dirname + '/public/index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
