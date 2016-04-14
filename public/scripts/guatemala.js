(function(module) {

var guatemala = [];

function getData() {

  $.ajax(
    {
      url: '../data/sample-country.json',
      type: 'GET',
      success: function(data) {
        guatemala = data;
        console.log(guatemala);
      },

      error: function() {
        console.error();
      },
    })
    .done(function(n) {
      getval(guatemala[0], 'humidity');
    }
  );
}

getData();

var getval = function(thisObj, property) {
  console.log(thisObj[property]);
}

module.guatemala = guatemala;

}(window);
