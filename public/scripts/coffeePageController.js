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

  // var selectedVal;
  // $('#coffeeCountry').change(function() {
  //   var selectEl = document.getElementById("coffeeCountry");
  //   selectedVal = selectEl.options[selectEl.selectedIndex].value;
  //   console.log(selectedVal);
  //   Coffee.fetchAll(coffeeView.inItIndexPage);
  // });
  // module.selectedVal = selectedVal;
  module.coffeePageController = coffeePageController;
})(window)
