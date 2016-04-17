(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('.tab').hide();
    $('#contact').fadeIn(500);
    $('.header').fadeIn(500);
    $('.nav').fadeIn(500);

  };

  module.contactController = contactController;
})(window);
