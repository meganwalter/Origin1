(function(module) {
  var origin = {};
  origin.all = [];
  origin.winner = '';
  origin.diff = 1000000;
  var guatemala = {};
  var nicaragua = {};
  var honduras = {};
  guatemala.all = [];
  nicaragua.all = [];
  honduras.all = [];
  guatemala.gs = [];
  nicaragua.gs = [];
  honduras.gs = [];
  guatemala.diff = 0;
  nicaragua.diff = 0;
  honduras.diff = 0;

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
      origin.loadAll();
      origin.compareAll(guatemala, nicaragua, honduras);
    }
  );
  };

  origin.loadAll = function() {

    guatemala.all = origin.all.filter(function(jsondata) {
      return jsondata.country === 'guatemala';
    });

    nicaragua.all = origin.all.filter(function(jsondata) {
      return jsondata.country === 'nicaragua';
    });

    honduras.all = origin.all.filter(function(jsondata) {
      return jsondata.country === 'honduras';
    });

    guatemala.gs = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gsguatemala';
    });

    nicaragua.gs = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gsnicaragua';
    });

    honduras.gs = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gshonduras';
    });
  };

  origin.getData();

  origin.compareAll = function(one, two, three) {
    one.diff = controller.countryTotal(one.all, one.gs);
    two.diff = controller.countryTotal(two.all, two.gs);
    three.diff = controller.countryTotal(three.all, three.gs);
    var arr = [one, two, three];
    for (var i in arr) {
      if (arr[i].diff < origin.diff) {
        origin.diff = arr[i].diff;
        origin.winner = arr[i].all[0].country;
      }
    }

    console.log(origin.winner);
  };

  module.origin = origin;
  module.guatemala = guatemala;
  module.nicaragua = nicaragua;
  module.honduras = honduras;

})(window);
