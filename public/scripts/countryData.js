(function(module) {
  var origin = {};
  origin.all = [];
  var guatemala = [];
  var nicaragua = [];
  var honduras = [];
  var gsguatemala = [];
  var gsnicaragua = [];
  var gshonduras = [];

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
      origin.compareAll(guatemala, gsguatemala, nicaragua, gsnicaragua, honduras, gshonduras);
    }
  );
  };

  origin.loadAll = function() {

    guatemala = origin.all.filter(function(jsondata) {
      return jsondata.country === 'guatemala';
    });

    nicaragua = origin.all.filter(function(jsondata) {
      return jsondata.country === 'nicaragua';
    });

    honduras = origin.all.filter(function(jsondata) {
      return jsondata.country === 'honduras';
    });

    gsguatemala = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gsguatemala';
    });

    gsnicaragua = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gsnicaragua';
    });

    gshonduras = origin.all.filter(function(jsondata) {
      return jsondata.country === 'gshonduras';
    });
  };

  origin.getData();

  origin.compareAll = function(one, gsone, two, gstwo, three, gsthree) {
    var diffArr = [];
    diffArr.push(controller.countryTotal(one, gsone));
    diffArr.push(controller.countryTotal(two, gstwo));
    diffArr.push(controller.countryTotal(three, gsthree));

  };


  module.origin = origin;
  module.guatemala = guatemala;
  module.nicaragua = nicaragua;
  module.honduras = honduras;
  module.gsguatemala = gsguatemala;
  module.gsnicaragua = gsnicaragua;
  module.gshonduras = gshonduras;

})(window);
