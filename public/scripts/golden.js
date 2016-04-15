(function(module) {

  var goldStnd = {};

  goldStnd.all = [];

  goldStnd.getData = function() {

    $.ajax(
      {
        url: '../data/sample.json',
        type: 'GET',
        success: function(data) {
          goldStnd.all = data;
          console.log(goldStnd);
        },

        error: function() {
          console.error();
        },
      })
      .done(function(n) {
        // put function here
      }
    );
  };

  module.goldStnd = goldStnd;

})(window);
