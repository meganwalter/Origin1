var goldStnd = [];

var countryOne = [];

function getData() {

  $.ajax(
    {
      url: '../data/sample.json',
      type: 'GET',
      success: function(data) {
        goldStnd = data;
        console.log(goldStnd);
      },

      error: function() {
        console.error();
      },
    })
    .done(function(n) {
      getval(goldStnd[0], 'humidity');
      keysArr(goldStnd[0]);
    }
  );
}

getData();

var getval = function(thisObj, property) {
  console.log(thisObj[property]);
}
