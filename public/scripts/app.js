// TODO: add controller for data storage of user contact info and deploy to firebbase
var formData = [];

function clearForm(event) {
  $('form').find(':checkbox').removeAttr('checked').end()
  .find('input, select, textarea').val('');
  return false;
}

$('#submitButton').on('click',function(event){
  event.preventDefault();
  var formInput = {};
  $('form').find('input, select, textarea').each(function() {
    var field = $(this).attr('id');
    var value = $(this).val();
    formInput[field] = value;
  });
  formData.push(formInput);
  clearForm();
});



// TODO: add map contrller els and data storage. this may need it's own controller.js
