$(document).ready(function() {

  // Change mic to arrow when mouse enters imput zone
  $('.newmess').mouseenter(function(){
    $('.bottom i').removeClass("fa-microphone-alt");
    $('.bottom i').addClass("fa-arrow-circle-right");
  }); // end .newmess mouseenter
  // goes back to mic after hiting send
  $('.bottom i').click(function(){
    $('.bottom i').addClass("fa-microphone-alt");
    $('.bottom i').removeClass("fa-arrow-circle-right");
  }); //end .bottom i click



  // On clicking the arrow the end user message is added to the current conv chatbox
  $(".bottom button").click(function(){
    // Get value from input field
    var newMess = $('#mynewmess').val($('#mynewmess').val());
    var isClicked = false;
      if (newMess.val() != "") {
        $('.chatbox.activebox').append('<div class="mymess box">' +  '<p>' + newMess.val() + '</p>' + '<span class="messtime">17.55</span></div>' + '<span class="more"><i class="fas fa-sort-down"></i></span>');
        isClicked = true;
        // reset the text field for new message
        newMess.val("");
      }; // end if newMess.val()

      // If we click send, we receive 'ok' as auto reply
      if (isClicked == true){
        newMess.val() != "";
        setTimeout(function(){
          $('.chatbox.activebox').append('<div class="friendchat box">' +  '<p>' + "ok" + '</p>' + '<span class="messtime">17.55</span></div>' + '<span class="more"><i class="fas fa-sort-down"></i></span>');
        }, 1000);
      }; // end if isCLicked
  }); // end .bottom button .click

  // by clickin kayboard 'Enter' the message is fed to current conv chatbox
  $("#mynewmess").keypress(function(event){
    var newMess = $('#mynewmess').val($('#mynewmess').val());
    if ( event.which == 13 ) {
      if (newMess.val() != "") {
        $('.chatbox.activebox').append('<div class="mymess box">' +  '<p>' + newMess.val() + '</p>' + '<span class="messtime">17.55</span></div>' + '<span class="more"><i class="fas fa-sort-down"></i></span>');
        newMess.val("");
        setTimeout(function(){
          $('.chatbox.activebox').append('<div class="friendchat box">' +  '<p>' + "ok" + '</p>' + '<span class="messtime">17.55</span></div>' + '<span class="more"><i class="fas fa-sort-down"></i></span>');
        }, 1000);
      };// end if newMess.val
    }; //end event.which == 13
  });// end #mynewmess keypress


  // search for conv by user typing
  $("#searchname").on("keyup", function() {
    // set value for current typed tect by user
    var value = $(this).val().toLowerCase();

    var contactEmpty = [];
    // gives the current available conv title in html
    $(".conv").filter(function() {
      // html conv currents titles
      var contact = $(this).attr("title");
      // if chars match is found pushed array with 1 and shows them
      if(contact.indexOf(value) > -1) {
        contactEmpty.push('1');
        $(this).fadeIn(800);
      // if not found removes chars that do not match
      }  else {
        $(this).fadeOut(300);
      }; // end if (contact.indexOf(value) > -1)

      // if no chars match shows the no contact found notification
      if(contactEmpty.length == 0){
           $('.no-contact').show();
       } else {
         $('.no-contact').hide();
       }; // end if (contactEmpty.length == 0)
    }); // end .conv filter function
  }); // end #searchname on keyup


  // change chatbox according user selection
  $(".conv").click(function(){
    // looks for title in conv clicked
    var currentFriend = $(this).attr("title");
    // removes class active to all CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN
    $(".conv").removeClass("active");
    // adds class active to the cicked conv
    $(this).addClass("active");
    // if selected conv is active adds active class to all other HTML classes to match selected single selected conv and hides all the other
    if ($(this).hasClass("active")){
      $(".current,.topbar .profile,.last-online").removeClass("activebox").hide();
      $(".chatbox").removeClass("activebox").hide();
      $(".chatbox[title=" + currentFriend +'],.current[title=' + currentFriend +'],.topbar .profile[title=' + currentFriend +'],.last-online[title=' + currentFriend +']').addClass("activebox").show();
    }; // end ($(this).hasClass("active"))
    if (!$(".current,.topbar .profile,.last-online").hasClass("activebox")){
      $(".current,.topbar .profile,.last-online").toggle(":hidden");
    }; // end (!$(".current,.topbar .profile,.last-online").hasClass("activebox"))
  }); // end .conv click

  // simulation of click on the first active class (else all the pictures of contacts where showing on first page load)
  $(".conv.active").trigger("click");

  // on mouse entering box shows arrow
  $(document).on("mouseenter", ".box" , function(){
    $(this).append("<span class='more'><i class='fas fa-sort-down'></i></span>").show();
  }); //end DOM mouse enter box

  // on clicking box message appends list of options
  $(document).on("click", ".box", function(){
    // append UL list
    $(this).append('<ul class="morelist"><li class="info">More info</li><li class="delete">Delete message</li></ul>')
    var currentBox = $(this);
    // deletes selected box message
    $(".delete").click(function(){
      currentBox.remove();
    }); //end delete box

    $(".info").click(function(){
      $("ul").remove();
      alert('( ͡° ͜ʖ ͡°)');
    }); //end .info

  }); //end DOM click box
  // on mouse leaveing box remove the appended list menu and add arrow to current box
  $(document).on("mouseleave" , ".box" , function(){
    $("span.more").remove();
    $("ul").remove();
  }); //end DOM mouseleaeve box

}); //end main DOM
