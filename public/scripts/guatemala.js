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

module.guatemala = guatemala;

})(window);
