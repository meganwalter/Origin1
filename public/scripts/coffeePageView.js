(function(module) {

var coffeeObj = [];

function Coffee(infoObj) {
  this.contryName = infoObj.contryName;
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

Coffee.all = [];

Coffee.loadAll = function(rawData) {
    Coffee.all = rawData.map(function (pd) {
      return new Coffee(pd)
  });
}


var guat = "guatemalaPage.json";
var hon = "hondurasPage.json";
var nic = "nicaraguaPage.json";
var selectedVal
    ,selectedName;
$('#coffeeCountry').change(function() {
  var selectEl = document.getElementById("coffeeCountry");
  selectedVal = selectEl.options[selectEl.selectedIndex].value;
  selectedName = selectEl.options[selectEl.selectedIndex].text;
  Coffee.fetchAll(coffeeView.inItIndexPage);
  });

  var eTag = 1;
  var ETag;
Coffee.fetchAll = function(callBack) {
  $('#goldenInfo').children().remove();

  if (localStorage.getItem(selectedName)) {
    Coffee.loadAll(JSON.parse(localStorage.getItem(selectedName)));
    callBack();
  } else {
    $.ajax ({
      url: "../data/" + selectedVal,
      method: "GET"
    })
     .done(function(data, message, xhr) {
       console.log(selectedName);
        eTag = xhr.getResponseHeader('ETag')
        localStorage.setItem(selectedName, JSON.stringify(data), eTag);
        localStorage.setItem('ETag', eTag);
        Coffee.loadAll(data);
        callBack();
    })
  }

};
module.selectedVal = selectedVal;
module.guat = guat;
module.Coffee = Coffee;
})(window)
