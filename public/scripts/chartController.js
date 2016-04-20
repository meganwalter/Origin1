(function(module) {

var barData = {
labels: ['Rain', 'Temp', 'Himidity'],
datasets: [
{
   label: '2010 customers #',
   fillColor: '#382765',
   data: [2500, 1902, 1041, 610, 1245, 952]
},
{
   label: '2010 customers #',
   fillColor: '#382765',
   data: [2500, 1902, 1041, 610, 1245, 952]
},
{
   label: '2014 customers #',
   fillColor: '#7BC225',
   data: [3104, 1689, 1318, 589, 1199, 1436]
}
]
};
function getChart() {
var ctx = document.getElementById('coffeeData').getContext('2d');

var coffeeChart = new Chart(ctx).Bar(barData);
}

module.getChart = getChart;
})(window)
