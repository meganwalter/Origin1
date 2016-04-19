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
  $("button").click(function() {
    console.log("click");
    $("#rainViz").attr("class", "");
  })
}

module.coffeeView = coffeeView
})(window);
