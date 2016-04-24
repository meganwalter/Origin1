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


  var selectedVal = "guatemalaPage.json";
  var selectedName = "guatemala";
  $('#coffeeCountry').change(function() {
    var selectEl = document.getElementById("coffeeCountry");
    selectedVal = selectEl.options[selectEl.selectedIndex].value;
    selectedName = selectEl.options[selectEl.selectedIndex].text;
    Coffee.fetchAll(coffeeView.inItIndexPage);
    weatherChart.buildchart(0);
    coffeeView.mapMonths();
    });

    $(function() {
      Coffee.fetchAll(coffeeView.inItIndexPage);
    });
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
          localStorage.setItem(selectedName, JSON.stringify(data));
          Coffee.loadAll(data);
          callBack();
      })
    }

  };
  module.selectedVal = selectedVal;
  module.Coffee = Coffee;
})(window)
