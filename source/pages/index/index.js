
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.green.css';
import $ from 'jquery';
import 'imports-loader?jQuery=jquery!owl.carousel';
import 'imports-loader?jQuery=jquery!webpack-jquery-ui';
// import 'imports-loader?jQuery=jquery!jquery-animate-scroll';

import '../../components/sly.js';

import 'normalize.css';
import './index.scss';










if ($(window).width() > 1000) {
  if (window.matchMedia("(min-width: 1001px)").matches) {

    jQuery(function ($) {
        (function () {
            var title = 'BO 0018/S / D28JJ'; //$('#po13342').find(":selected").text();
            var startIndex = $("a[title='"+title+"']").parent().index();
            var $frame = $('#main-slider');
            var $wrap = $frame.parent();

            // Call Sly on frame
            var slyOptions = {
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                activateOn: 'click',
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                scrollBar: $wrap.find('.scrollbar'),
                startAt: 0,
                scrollBy: 1,
                speed: 2500,
                elasticBounds: 1,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: false,
                minHandleSize: 8,
                clickBar: 1,

                // Buttons
                prev: $wrap.find('.prev'),
                next: $wrap.find('.next')
            };

            var slyInstance = new Sly($frame, slyOptions).init();

            slyInstance.on('change', function (eventName) {
                var currentItem = this.rel.activeItem + 1;
                if (currentItem < 10) {
                  currentItem = '0' + currentItem;
                }
                $('#js-huge-num').text(currentItem);
            });

            //
        }());
    });

  } //- EOF matchMedia
}   //- EOF (window).width



if ($(window).width() < 1001) {
  if (window.matchMedia("(max-width: 1000px)").matches) {

    jQuery(function ($) {
        (function () {
            var title = 'BO 0018/S / D28JJ'; //$('#po13342').find(":selected").text();
            var startIndex = $("a[title='"+title+"']").parent().index();
            var $frame = $('#main-slider');
            var $wrap = $frame.parent();


            // Call Sly on frame
            var slyOptions = {
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                activateOn: 'click',
                activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                scrollBar: $wrap.find('.scrollbar'),
                startAt: 0,
                scrollBy: 1,
                speed: 1000,
                elasticBounds: 1,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: false,
                minHandleSize: 8,
                clickBar: 1,

                // Buttons
                prev: $wrap.find('.prev'),
                next: $wrap.find('.next')
            };

            var slyInstance = new Sly($frame, slyOptions).init();

            var totalItems = slyInstance.items.length;
            if (totalItems < 10) {
              totalItems = '0' + totalItems;
            }
            $('.scrollbar__total').text(totalItems);

            slyInstance.on('change', function (eventName) {

                    // console.log(eventName); //
                    // console.log(this.rel.activeItem);

                    var currentItem = this.rel.activeItem + 1;
                    if (currentItem < 10) {
                      currentItem = '0' + currentItem;
                    }
                    $('.scrollbar__curr').text(currentItem);
            });
        }());
    });



  } //- EOF matchMedia
}   //- EOF (window).width


if ($(window).width() < 1001) {
  if (window.matchMedia("(max-width: 1000px)").matches) {

    $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        center: true,
        loop: true,
        items: 2,
        autoWidth:true,
        dots:false,
        margin:0,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          960: {
            items: 5
          },
          1200: {
            items: 6
          }
        }
      });
      owl.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
          owl.trigger('next.owl');
        } else {
          owl.trigger('prev.owl');
        }
        e.preventDefault();
      });
    })

  } //- EOF matchMedia
}   //- EOF (window).width







/* burger */

(function($) {

  var toggled = 0;

  $('.sort__link').on("click", function(event) {
    event.stopPropagation(); /* important */
    var index = $(this).parent().index();
    $('.sort__link').parent().removeClass('active');
    $(this).parent().addClass('active');
    var translateY = ((index - 1) * 61) + 5;
    $('.sort__arr').css('transform', 'translateY('+ translateY +'px)');
  });

})(jQuery);



/* eof burger */


/* view more */

(function($) {

  $('.view-more').on("click", function(event) {
    event.stopPropagation(); /* important */
    // console.log($(this).parent());


    if ($(this).children('.js-more')[0]){
      $(this).parent().find('.view-more__content').slideUp(300);
      $(this).children('.view-more__title').removeClass('js-more');
      $(this).children('.view-more__title').html('view more');
    } else {
      $(this).parent().find('.view-more__content').slideDown(300);

      // change text to view less
      $(this).children('.view-more__title').addClass('js-more');
      $(this).children('.view-more__title').html('view less');
    }


  });

})(jQuery);



/* eof view more */



$(function($) {
    var num_cols = 3,
    container = $('.split-list'),
    listItem = 'li',
    listClass = 'sub-list';
    container.each(function() {
        var items_per_col = new Array(),
        items = $(this).find(listItem),
        min_items_per_col = Math.floor(items.length / num_cols),
        difference = items.length - (min_items_per_col * num_cols);
        for (var i = 0; i < num_cols; i++) {
            if (i < difference) {
                items_per_col[i] = min_items_per_col + 1;
            } else {
                items_per_col[i] = min_items_per_col;
            }
        }
        for (var i = 0; i < num_cols; i++) {
            $(this).append($('<ul ></ul>').addClass(listClass));
            for (var j = 0; j < items_per_col[i]; j++) {
                var pointer = 0;
                for (var k = 0; k < i; k++) {
                    pointer += items_per_col[k];
                }
                $(this).find('.' + listClass).last().append(items[j + pointer]);
            }
        }
    });
});
