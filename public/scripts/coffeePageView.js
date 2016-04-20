(function(module) {

var coffeeObj = [];

function Coffee(infoObj) {
  this.countryBio = infoObj.countryBio;
  this.featuredCoffeePic = infoObj.featuredCoffeePic;
  this.featuredRoasterBio = infoObj.featuredRoasterBio;
  this.map = infoObj.map;
  this.brewPic = infoObj.brewPic;
  this.brewInstructions = infoObj.brewInstructions;
};
Coffee.prototype.toHtml = function() {
  var templateSrc = $("#coffeePageTemplate").text();
  var template = Handlebars.compile(templateSrc);
  return template(this);
};

var selectCountry = [guat, hon, nic];
Coffee.all = [];

Coffee.loadAll = function(rawData) {
    Coffee.all = rawData.map(function (pd) {
      return new Coffee(pd)
  });
}


var guat = "guatemalaPage.json";
var hon = "hondurasPage.json";
var nic = "nicaraguaPage.json";
var selectedVal;
$('#coffeeCountry').change(function() {
  var selectEl = document.getElementById("coffeeCountry");
  selectedVal = selectEl.options[selectEl.selectedIndex].value;
  console.log(selectedVal);
  Coffee.fetchAll(coffeeView.inItIndexPage);
});

Coffee.fetchAll = function(callBack) {
  // if (localStorage.rawData) {
  //   Coffee.loadAll(JSON.parse(localStorage.rawData));
  //   callBack();
  // } else {
    $.ajax ({
      url: "../data/" + selectedVal,
      method: "GET"
    }) .done(function(data, message, xhr) {
        // localStorage.setItem('rawData', JSON.stringify(data));
        Coffee.loadAll(data);
        callBack();
      });
    // }
}
// module.selectedVal = selectedVal;
// module.guat = guat;
module.Coffee = Coffee;
})(window)
