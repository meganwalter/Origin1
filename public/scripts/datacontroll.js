(function(module) {

  function dothis() {

    guatemala.getData();
    goldStnd.getData();
  }

  function doanotherthing() {
    var a = guatemala.all[0].humidity;
    var b = goldStnd.all[0].humidity;
    console.log(Math.abs(a - b));
    return Math.abs(a - b);
  }

  // doanotherthing();

  module.doanotherthing = doanotherthing;
  $(document).ajaxStop(function() {

    doanotherthing();
  });

})(window);
