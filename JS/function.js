$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


  if(wScroll > $('.abouttitledesc').offset().top - ($(window).height() / 1)) {

    $("#abouttitle").addClass("abouttitle");

  }
  if(wScroll > $('#hello_name').offset().top - ($(window).height() / 1)) {

    $("#hello_name").addClass("hello_name");

  }
  if(wScroll > $('#column1').offset().top - ($(window).height() / 1)) {

    $("#column1").addClass("column1");

  }
  if(wScroll > $('#column2').offset().top - ($(window).height() / 1)) {

    $("#column2").addClass("column2");

  }
  if(wScroll > $('#skillprogressbarcontent').offset().top - ($(window).height() / 1)) {

    $("#skillprogressbarcontent").addClass("skillprogressbarcontent");

  }
  if(wScroll > $('#skillcolumn1').offset().top - ($(window).height() / 1)) {

    $("#skillcolumn1").addClass("skillcolumn1");

  }
  if(wScroll > $('#skillcolumn1').offset().top - ($(window).height() / 1)) {

    $("#skillcolumn2").addClass("skillcolumn2");
  }


});
