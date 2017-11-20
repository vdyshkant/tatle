
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.green.css';
import $ from 'jquery';
// import 'imports-loader?jQuery=jquery!owl.carousel';
import 'imports-loader?jQuery=jquery!webpack-jquery-ui';
// import 'imports-loader?jQuery=jquery!jquery-animate-scroll';
import '../../components/sly.js';

import 'normalize.css';
import './product.scss';



/* tabs for content */

(function($) {

  var toggled = 0;

  $(".nav__item[data-menuId]").on("click", function(event) {
    event.stopPropagation(); /* important */
    var attr = $(this).attr("data-menuId");

    var targetedDiv = $('#tab' + attr);
    console.log("attr:", attr);
    console.log('targetedDiv::', targetedDiv);

    $('.block').removeClass('activated');
    targetedDiv.addClass('activated');

    $('.nav__item').removeClass('active');
    $(this).addClass('active');

    $('#js-tab-index').html(attr);





    var index = $(this).parent().index();
    $('.sort__link').parent().removeClass('active');
    $(this).parent().addClass('active');
    var translateY = ((index - 1) * 61) + 5;
    $('.sort__arr').css('transform', 'translateY('+ translateY +'px)');
  });

})(jQuery);



/* eof tabs for content */



// -------------------------------------------------------------
//   Smart Navigation
// -------------------------------------------------------------
if ($(window).width() > 1000) {
  if (window.matchMedia("(min-width: 1001px)").matches) {


    (function () {
      var $frame  = $('#smart');
      var $slidee = $frame.children('ul').eq(0);
      var $wrap   = $frame.parent();

      // Call Sly on frame
      var slyOptions = {
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 3,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        pagesBar: $wrap.find('.pages'),
        activatePageOn: 'click',
        speed: 1300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: false,
        clickBar: 1,

        // Buttons
        forward: $wrap.find('.forward'),
        backward: $wrap.find('.backward'),
        prev: $wrap.find('.prev'),
        next: $wrap.find('.next'),
        prevPage: $wrap.find('.prevPage'),
        nextPage: $wrap.find('.nextPage')
      };

      var slyInstance = new Sly($frame, slyOptions).init();

      window.addEventListener("resize", function() {

        // slyInstance.reload();

        $frame.sly('reload');

      });


    }());



  } //- EOF matchMedia
}   //- EOF (window).width






var getaudio = $('#player')[0];
/* Get the audio from the player (using the player's ID), the [0] is necessary */
var mouseovertimer;
/* Global variable for a timer. When the mouse is hovered over the speaker it will start playing after hovering for 1 second, if less than 1 second it won't play (incase you accidentally hover over the speaker) */
var audiostatus = 'off';
/* Global variable for the audio's status (off or on). It's a bit crude but it works for determining the status. */

$(document).on('mouseenter', '.speaker', function() {
  /* Bonus feature, if the mouse hovers over the speaker image for more than 1 second the audio will start playing */
  if (!mouseovertimer) {
    mouseovertimer = window.setTimeout(function() {
      mouseovertimer = null;
      if (!$('.speaker').hasClass("speakerplay")) {
        getaudio.load();
        /* Loads the audio */
        getaudio.play();
        /* Play the audio (starting at the beginning of the track) */
        $('.speaker').addClass('speakerplay');
        return false;
      }
    }, 1000);
  }
});

$(document).on('mouseleave', '.speaker', function() {
  /* If the mouse stops hovering on the image (leaves the image) clear the timer, reset back to 0 */
  if (mouseovertimer) {
    window.clearTimeout(mouseovertimer);
    mouseovertimer = null;
  }
});

$(document).on('click touchend', '.speaker', function() {
  /* Touchend is necessary for mobile devices, click alone won't work */
  if (!$('.speaker').hasClass("speakerplay")) {
    if (audiostatus == 'off') {
      $('.speaker').addClass('speakerplay');
      getaudio.load();
      getaudio.play();
      window.clearTimeout(mouseovertimer);
      audiostatus = 'on';
      return false;
    } else if (audiostatus == 'on') {
      $('.speaker').addClass('speakerplay');
      getaudio.play()
    }
  } else if ($('.speaker').hasClass("speakerplay")) {
    getaudio.pause();
    $('.speaker').removeClass('speakerplay');
    window.clearTimeout(mouseovertimer);
    audiostatus = 'on';
  }
});

$('#player').on('ended', function() {
  $('.speaker').removeClass('speakerplay');
  /*When the audio has finished playing, remove the class speakerplay*/
  audiostatus = 'off';
  /*Set the status back to off*/
});
