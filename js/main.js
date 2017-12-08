$(function()
{

  // UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
  var kc = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var n = 0;

  $(document).keydown(function (e)
  {
    if (e.keyCode === kc[n++])
      {
          if (n === kc.length)
          {
            window.open("animation_easter/index.html","_self")
            n = 0;n
          }
      }
      else
      {
          n = 0;
      }
  });
});


$(document).ready(function(){
  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {

    // console.log(this.hash);
    // $('.nav-item').removeClass('active');
    // $(this).toggleClass('active');

    // Make sure this.hash has a value before overriding default behavior
    if ((this.hash !== "") && (this.hash !== "#pageSubmenu")) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
