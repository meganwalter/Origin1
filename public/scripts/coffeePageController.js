(function(module) {
  var coffeePageController = {};

  coffeePageController.index = function() {
    $('.tab').hide();
    $('#contact').hide();
    $('.naveEle').fadeIn(500);
    $('#coffeePage').fadeIn(500);
    $('#coffeeCountry').fadeIn(500);
    $('.header').fadeIn(500);
    $('.footer').fadeIn(500);
    $('.nav').fadeIn(500);
    Coffee.fetchAll(coffeeView.inItIndexPage);
    coffeeView.mapMonths();
    weatherChart.buildchart(0);
    // $(document).ajaxStop(function () {
    // })
  }

  module.coffeePageController = coffeePageController;
})(window)
