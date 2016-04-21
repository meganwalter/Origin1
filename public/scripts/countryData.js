(function(module) {
  var origin = {};
  origin.all = [];
  var guatemala = {};
  var nicaragua = {};
  var honduras = {};
  guatemala.all = [];
  nicaragua.all = [];
  honduras.all = [];
  guatemala.gs = [];
  nicaragua.gs = [];
  honduras.gs = [];

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
    var diffArr = [];
    diffArr.push(controller.countryTotal(one, one.gs));
    diffArr.push(controller.countryTotal(two, two.gs));
    diffArr.push(controller.countryTotal(three, three.gs));
    console.log(diffArr);
  };


  module.origin = origin;
  module.guatemala = guatemala;
  module.nicaragua = nicaragua;
  module.honduras = honduras;
  module.gsguatemala = gsguatemala;
  module.gsnicaragua = gsnicaragua;
  module.gshonduras = gshonduras;

})(window);
