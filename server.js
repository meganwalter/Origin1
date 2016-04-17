var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var pg = require('pg');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile(__dirname + '/public/index.html', { root: '.' });
});


//this is where postgres starts
//or native libpq bindings
var conString = process.env.ELEPHANTSQL_URL || "postgres://ezzwtbet:MzS6fXklZnlb-n2qtS8W-4Y2QmBmzzIK@pellefant.db.elephantsql.com:5432/ezzwtbet";
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

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT * from origin1', function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result);
//     //output should be database
//     client.end();
//   });
// });
