(function(module) {
var coffeeView = {};

$(document).ready(function() {
  $('#contact').hide();
});

coffeeView.inItIndexPage = function() {
  Coffee.all.forEach(function(a) {
    $('#goldenInfo').append(a.toHtml());
  })
}
coffeeView.mapMonths = function() {
  $(".mapButtons").click(function() {
    getChart();
  })
}

module.coffeeView = coffeeView
})(window);
