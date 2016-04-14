(function(module) {

var guatemala = {};

guatemala.all = [];

guatemala.getData = function() {

  $.ajax(
    {
      url: '../data/sample-country.json',
      type: 'GET',
      success: function(data) {
        guatemala.all = data;
        console.log(guatemala);
      },

      error: function() {
        console.error();
      },
    })
    .done(function(n) {
      
    }
  );
};

var getval = function(thisObj, property) {
  console.log(thisObj[property]);
};

module.guatemala = guatemala;

guatemala.getData();

})(window);
