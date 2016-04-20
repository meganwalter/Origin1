(function(module) {

  var origin = {};
  origin.all = [];
  var guatemala = {};
  guatemala.all = [];
  var nicaragua = {};
  nicaragua.all = [];
  var honduras = {};
  honduras.all = [];
  var gsguatemala = {};
  gsguatemala.all = [];
  var gsnicaragua = {};
  gsnicaragua.all = [];
  var gshonduras = {};
  gshonduras.all = [];

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

    gsguatemala.all = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gsguatemala';
    });

    gsnicaragua.all = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gsnicaragua';
    });

    gshonduras.all = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gshonduras';
    });
  };

  origin.getData();

  module.origin = origin;
  module.guatemala = guatemala;
  module.nicaragua = nicaragua;
  module.honduras = honduras;
  module.gsguatemala = gsguatemala;
  module.gsnicaragua = gsnicaragua;
  module.gshonduras = gshonduras;

})(window);
