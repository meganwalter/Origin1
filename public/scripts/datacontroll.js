(function(module) {
  var controller = {};

  controller.diff = [];

  controller.compareProps = function(month, monthTwo) {
    var propDiff = 0;
    for (var x in month) {
      if (typeof month[x] === 'number' && x !== 'year') {
        var diff = Math.abs(month[x] - monthTwo[x]);
        propDiff += diff;
      }
    }
    return propDiff;
  };

  controller.compareYear = function(gs, ctry) {
    var variance = [];
    for (var months in gs) {
      var diff = controller.compareProps(gs[months], ctry[months]);
      variance.push(diff);
    }
    return variance;
  };

  controller.countryTotal = function(gs, ctry) {
    return controller.compareYear(gs, ctry).reduce(function(a, b) {
      return a + b;
    });
  };

  module.controller = controller;
})(window);
