// DONE: add controller for data storage of user contact info and deploy to firebbase
var myFirebaseRef = new Firebase('https://origin1.firebaseio.com/Forms');
var formsref = myFirebaseRef.push();
var formData = [];

function clearForm(event) {
  $('form').find(':checkbox').removeAttr('checked').end()
  .find('input, select, textarea').val('');
  return false;
}

$('#submitButton').on('click',function(event){
  validateForm();
  var formInput = {};
  $('form').find('input, select, textarea').each(function() {
    var field = $(this).attr('id');
    var value = $(this).val();
    formInput[field] = value;
  });
  formData.push(formInput);
  formsref.set(formData, function(error) {
    if (error) {
      console.log('Data could not be saved' + error);
    } else {
      console.log('Data saved successfully');
    }
  });
  clearForm();
});

function validateForm(event) {
  var x = $('#fname').val();
  if (x === null || x === '') {
    $('form span').removeClass('error');
    $('form span').addClass('errorShow');
    event.preventDefault();
  } else {
    $('form span').removeClass('errorShow');
    $('form span').addClass('error');
  }
  var y = $('#lname').val();
  if(y === null || y === ''){
    $('form span').removeClass('error');
    $('form span').addClass('errorShow');
    event.preventDefault();
  } else {
    $('form span').removeClass('errorShow');
    $('form span').addClass('error');
  }
  var z = $('#email').val();
  if(z === null || z === ''){
    $('form span').removeClass('error');
    $('form span').addClass('errorShow');
    event.preventDefault();
  }else {
    $('form span').removeClass('errorShow');
    $('form span').addClass('error');
  }
  return false;
}





// TODO: add map contrller els and data storage. this may need it's own controller.js
