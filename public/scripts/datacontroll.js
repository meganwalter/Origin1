(function(module) {
  var controller = {};

  controller.diff = [];

  controller.compareProps = function(month, monthTwo) {
    var propDiff = 0;
    for (var x in month) {
      if (typeof month[x] === 'number') {
        var diff = Math.abs(month[x] - monthTwo[x]);
        propDiff += diff;
      }
    }
    return propDiff;
  };

  controller.compareYear = function(gs, ctry) {
    for (var months in gs) {
      var diff = controller.compareProps(gs[months], ctry[months]);
      controller.diff.push(diff);
    }
  };

  controller.countryTotal = function(diffArr){
    diffArr.reduce()
  }

  module.controller = controller;
})(window);
