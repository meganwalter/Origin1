(function(module) {
  var coffeePageController = {};

  coffeePageController.index = function() {
    $('.tab').hide();
    $('#coffeePage').fadeIn(500);
    $('.header').fadeIn(500);
    $('.nav').fadeIn(500);

  }

  module.coffeePageController = coffeePageController;
})(window)
