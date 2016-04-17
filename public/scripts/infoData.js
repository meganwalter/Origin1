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

module.coffeeView = coffeeView
})(window);
