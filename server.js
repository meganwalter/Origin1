var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var pg = require('pg');

app.use(express.static(__dirname + '/public'));


var conString = process.env.ELEPHANTSQL_URL;
//var pg = require('pg').native
app.get('/api/origin1', function(req, res) {
  var results = [];
  pg.connect(conString, function(err, client, done){
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }

    var query = client.query('SELECT * FROM origin1 ORDER BY year, month ASC;');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function(){
      done();
      return res.json(results);
    });
  });
});

app.get('/', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('public/index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
