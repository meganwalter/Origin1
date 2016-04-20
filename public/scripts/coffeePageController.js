(function(module) {
  var coffeePageController = {};

  coffeePageController.index = function() {
    $('.tab').hide();
    $('#contact').hide();
    $('#coffeePage').fadeIn(500);
    $('.header').fadeIn(500);
    $('.footer').fadeIn(500);
    $('.nav').fadeIn(500);
    Coffee.fetchAll(coffeeView.inItIndexPage);
    coffeeView.mapMonths();
    getChart();
  }



  module.coffeePageController = coffeePageController;
})(window)
