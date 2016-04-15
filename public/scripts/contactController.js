(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('.tab').hide();
    $('#contact').fadeIn(500);
  }

  module.contactController = contactController;
})(window)
