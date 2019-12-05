$(document).ready(function() {

 // Change mic to arrow when mouse enters imput zone
  $('.newmess').mouseenter(function(){
    $('.bottom i').removeClass("fa-microphone-alt");
    $('.bottom i').addClass("fa-arrow-circle-right");
  });
  // goes back to mic after hiting send
  $('.bottom i').click(function(){
    $('.bottom i').addClass("fa-microphone-alt");
    $('.bottom i').removeClass("fa-arrow-circle-right");
  });



  // On clicking the arrow the end user message is added to the chat box
  $(".bottom button").click(function(){
    // Get value from input field
    var newMess = $('#mynewmess').val($('#mynewmess').val());
    var isClicked = false;
      if (newMess.val() != "") {
        $('.chatbox').append('<div class="mymess box">' +  '<p>' + newMess.val() + '</p>' + '<span class="messtime">17.55</span></div>');
        isClicked = true;
        // reset the text field for new message
        newMess.val("");
      }

      // If we click send, we receive 'ok' as auto reply
      if (isClicked == true){
        newMess.val() != "";
        setTimeout(function(){
          $('.chatbox').append('<div class="friendchat box">' +  '<p>' + "ok" + '</p>' + '<span class="messtime">17.55</span></div>');
        }, 1000);
      }
  });

  $("#mynewmess").keypress(function(event){
    var newMess = $('#mynewmess').val($('#mynewmess').val());
      if ( event.which == 13 ) {
        if (newMess.val() != "") {
          $('.chatbox').append('<div class="mymess box">' +  '<p>' + newMess.val() + '</p>' + '<span class="messtime">17.55</span></div>');
          newMess.val("");
          setTimeout(function(){
            $('.chatbox').append('<div class="friendchat box">' +  '<p>' + "ok" + '</p>' + '<span class="messtime">17.55</span></div>');
          }, 1000);
        }
    }
  });



  $("#searchname").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    var contactEmpty = [];

    $(".conv").filter(function() {
      var contact = $(this).attr("title");
      if(contact.indexOf(value) > -1) {
        contactEmpty.push('1');
        console.log(contactEmpty);
        $(this).fadeIn(800);
      }  else {
        $(this).fadeOut(300);
      }

      if(contactEmpty.length == 0){
           $('.no-contact').show();
         } else {
           $('.no-contact').hide();
         }
    });

  });

  var currentConv = $(".conv").attr("title");

  $(".conv").click(function(){
    var currentFriend = $(this).attr("title");
    console.log(currentFriend);

    $(".conv").removeClass("active")
    $(this).addClass("active")
    if ($(this).hasClass("active")){
      $(".chatbox").attr("title",currentFriend).show()
    }

  });


});
