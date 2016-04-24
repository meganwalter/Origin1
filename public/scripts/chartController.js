(function(module) {

  var weatherChart = {};

  weatherChart.currentChart = undefined;

  weatherChart.buildchart = function (clicked) {

    var barData = {
      labels: ['precipitation', 'avgtemp', 'humidity'],
      datasets: [
        {
          label: 'guatemala',
          fillColor: 'green',
          data: []
        },
        {
          label: 'nicaragua',
          fillColor: 'blue',
          data: []
        },
        {
          label: 'honduras',
          fillColor: 'red',
          data: []
        }
      ]
    };

    var labels = barData.labels;
    for (label in labels) {
      var x = labels[label];
      barData.datasets[0].data.push(guatemala.all[clicked][x]);
      barData.datasets[1].data.push(nicaragua.all[clicked][x]);
      barData.datasets[2].data.push(honduras.all[clicked][x]);
    }
    var ctx = document.getElementById('coffeeData').getContext('2d');
    var coffeeChart = new Chart(ctx).Bar(barData);
    weatherChart.currentChart = coffeeChart;
  };

  module.weatherChart = weatherChart;
})(window);
