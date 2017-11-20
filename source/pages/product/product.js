
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
      $frame.sly({
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
      });
    }());


  } //- EOF matchMedia
}   //- EOF (window).width
