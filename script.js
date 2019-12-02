$(document).ready(function() {


 // Change mic to arrow when mouse enters imput zone
  $('.newmess').mouseenter(function(){
    $('.bottom i').removeClass("fa-microphone-alt");
    $('.bottom i').addClass("fa-arrow-circle-right");
  });

 // Get value from input field
  var newMess = $('#mynewmess').val($('#mynewmess').val());

 // On clicking the arrow the end user message is added to the chat box
  $(".bottom button").click(function(){
    $('.chatbox').append('<div class="mymess box">' +  '<p>' + newMess.val() + '</p>' + '<span class="messtime">17.55</span></div>');
    // reset the text field for new message
    newMess.val("");
  });

});
