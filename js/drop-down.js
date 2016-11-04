$(document).ready(function(){
  
  $('img.close').click(function(){
    $(this).parent().parent().fadeOut(500);
  })


  $('#register .client-text li:nth-of-type(6)').click(function(){
    $(this).toggleClass('clicked');
    $('#register .tool-tip ul').fadeToggle();
  })
})
