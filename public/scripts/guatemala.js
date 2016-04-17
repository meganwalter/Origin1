(function(module) {

var guatemala = {};

guatemala.all = [];

var origin = {};

origin.all = [];

origin.getData = function() {

  $.ajax(
    {
      url: '/api/origin1/',
      type: 'GET',
      success: function(data) {
        origin.all = data;
        console.log(origin.all);
      },

      error: function() {
        console.error();
      },
    })
    .done(function(n) {
      guatemala.all = origin.all.filter(function(jsondata) {
        return jsondata.country === 'guatemala';
      });
    }
  );
};

origin.getData();

module.origin = origin;
module.guatemala = guatemala;

})(window);
