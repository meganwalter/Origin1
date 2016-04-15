(function(module) {
  var controller = {};

  controller.compareProps = function(month, monthTwo) {
    for (var x in month) {
      console.log(month[x] - monthTwo[x]);
    }
  };

  controller.compareAll = function(arr) {
    arr.forEach(function() {
      var a = guatemala.all[0].this;
      var b = goldStnd.all[0].this;
      console.log(Math.abs(a - b));
      return Math.abs(a - b);
    });
  };

  controller.getData = function(standard, country) {
    country.getData();
    standard.getData();
  };


  $(document).ajaxStop(function() {
    controller.compareProps(guatemala.all[0], goldStnd.all[0]);
    // controller.compareAll();
  });

  module.controller = controller;
})(window);
