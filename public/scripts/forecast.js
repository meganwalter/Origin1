var Forecast = require('forecast.io');

var options = {
  APIKey: process.env.FORECAST_API_KEY
},
forecast = new Forecast(options);

var time = new Date().setDate(0);

forecast.getAtTime(latitude, longitude, time, function(err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
