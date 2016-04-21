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

coffeeView.mapMonths = function(){
 $('#mapButtons').on('click', 'li', function(){
   weatherChart.currentChart.destroy();
   var clickedMonth = 1 + months.indexOf($(this).data('content'));
   weatherChart.buildchart(clickedMonth);
 })
}

module.coffeeView = coffeeView
})(window);
