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
var guat = "guatemalaPage.json";
var hon = "hondurasPage.json";
var nic = "nicaraguaPage.json";

var selectCountry = [guat, hon, nic];
Coffee.all = [];

Coffee.loadAll = function(rawData) {
    Coffee.all = rawData.map(function (pd) {
      return new Coffee(pd)
  });
}

Coffee.menuOption = function() {
  var id = $('.menuOptions');
  var idValue = id.options[id.selectedIndex].value;
  console.log(idValue);
}
Coffee.fetchAll = function(callBack) {
  if (localStorage.rawData) {
    Coffee.loadAll(JSON.parse(localStorage.rawData));
    callBack();
  } else {
    $.ajax ({
      url: "../data/" + selectCountry[0],
      method: "GET"
    }) .done(function(data, message, xhr) {
        localStorage.setItem('rawData', JSON.stringify(data));
        Coffee.loadAll(data);
        callBack();
      });
    }
}

module.Coffee = Coffee;
})(window)
