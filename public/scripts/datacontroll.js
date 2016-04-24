(function(module) {
  var controller = {};

  controller.compareProps = function(month, monthTwo) {
    var propDiff = 0;
    for (var x in month) {
      if (typeof month[x] === 'number' && x !== 'year' && x !== 'precipitation') {
        var diff = Math.abs(month[x] - monthTwo[x]);
        propDiff += diff;
      } else if (x === 'precipitation') {
        var pdiff = 50 * Math.abs(month[x] - monthTwo[x]);
        propDiff += pdiff;
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
