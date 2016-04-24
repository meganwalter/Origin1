(function(module) {
  var coffeeView = {};

  $(document).ready(function() {
    $('#contact').hide();
    $('#coffeePage').hide();
    $('#coffeeCountry').hide();
    $('.footer').hide();
    $('.naveEle').hide();
    $('.fluff').hide();
  });

  $('.navCollapsed').on('click', function() {
    $(this).toggleClass('navExpanded');
  });

  coffeeView.inItIndexPage = function() {
    Coffee.all.forEach(function(a) {
      $('#goldenInfo').append(a.toHtml());
    });
  };

  coffeeView.mapMonths = function(){
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    $('#mapMonths').on('click', 'button', function(){
      if (weatherChart.currentChart) {
        weatherChart.currentChart.destroy();
      }
      var clickedMonth = months.indexOf($(this).data('content'));
      weatherChart.buildchart(clickedMonth);
    });
  };

  module.coffeeView = coffeeView;
})(window);
