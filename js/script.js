$(document).ready(function()
{

  console.log('script time! ) :');
  var anchor = $('a');
  var nav = $('.nav');
  if($(window).outerWidth()<768)
  {
    anchor.show();
  }
    anchor.on('click', function()
      {
        nav.toggle();
      });
$(window).on('resize',function(){
    //console.log($(window).outerWidth());
  if($(window).outerWidth()<768)
  {

    anchor.show();//css('visibility', 'visible');
    nav.hide();
    console.log('zadzialalo');
  }
  else {
    nav.show();
    anchor.hide();
  }
});

});
