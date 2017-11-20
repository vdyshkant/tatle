
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.green.css';
import $ from 'jquery';
import 'imports-loader?jQuery=jquery!owl.carousel';
import 'imports-loader?jQuery=jquery!webpack-jquery-ui';
// import 'imports-loader?shufflejs';
// import 'imports-loader?jQuery=jquery!jquery-animate-scroll';

import '../../components/sly.js';

import 'normalize.css';
import './index.scss';

// import Shuffle from 'shufflejs';
//
// const shuffleInstance = new Shuffle($('#main-slider .clearfix'), {
//   itemSelector: 'li[data-date-created]',
//   // sizer: '.js-shuffle-sizer'
//   sizer: null,
//   buffer: 0, // Useful for percentage based heights when they might not always be exactly the same (in pixels).
//   columnThreshold: 0.01, // Reading the width of elements isn't precise enough and can cause columns to jump between values.
//   columnWidth: 0, // A static number or function that returns a number which tells the plugin how wide the columns are (in pixels).
//   delimeter: null, // If your group is not json, and is comma delimeted, you could set delimeter to ','.
//   easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // CSS easing function to use.
//   filterMode: Shuffle.FilterMode.ANY, // When using an array with filter(), the element passes the test if any of its groups are in the array. With "all", the element only passes if all groups are in the array.
//   group: Shuffle.ALL_ITEMS, // Initial filter group.
//   gutterWidth: 0, // A static number or function that tells the plugin how wide the gutters between columns are (in pixels).
//   initialSort: null, // Shuffle can be initialized with a sort object. It is the same object given to the sort method.
//   isCentered: false, // Attempt to center grid items in each row.
//   roundTransforms: true, // Whether to round pixel values used in translate(x, y). This usually avoids blurriness.
//   speed: 250, // Transition/animation speed (milliseconds).
//   staggerAmount: 15, // Transition delay offset for each item in milliseconds.
//   staggerAmountMax: 150, // Maximum stagger delay in milliseconds.
//   throttle: throttle, // By default, shuffle will throttle resize events. This can be changed or removed.
//   throttleTime: 300, // How often shuffle can be called on resize (in milliseconds).
//   useTransforms: true, // Whether to use transforms or absolute positioning.
// });












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

          $('.nav__item').on('click', function(){
            var attr = $(this).attr("data-id");

            sly.activete(2);
          });

          var block = $('#main-slider ul');
          var attr;
          var tagFilterArray;
          var htmlObject;


          $('.nav__item').on("click", function(event) {
            event.stopPropagation(); /* important */

            $('.nav__item').removeClass('active');
            $(this).addClass('active');

            attr = $(this).attr("data-group");
            tagFilterArray = data.filter(function(item) {
              return item.groups == attr;
            });
            totalItems = tagFilterArray.length;
            if (totalItems < 10) {
              totalItems = '0' + totalItems;
            }
            $('#js-huge-num').text(totalItems);


            sly.destroy();
            block.empty();

            htmlObject = updateData(tagFilterArray);

            block.append(htmlObject.join(''));

            sly.init();

            makeUlsToBeColumns();

            sly.activate(1);
            setTimeout(function(){
              sly.activate(0);
            }, 300);


          }); //- EOF on.click (search by tag name)

        }());
    });



  } //- EOF matchMedia
}   //- EOF (window).width



if ($(window).width() < 1001) {
  if (window.matchMedia("(max-width: 1000px)").matches) {

    $(document).ready(function() {

      $('.nav__item').removeClass('active');

      var owl = $('.owl-carousel');
      owl.owlCarousel({
        center: true,
        loop: true,
        items: 1,
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
      // owl.on('mousewheel', '.owl-stage', function(e) {
      //   if (e.deltaY > 0) {
      //     owl.trigger('next.owl');
      //   } else {
      //     owl.trigger('prev.owl');
      //   }
      //   e.preventDefault();
      // });
    });

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















/*
 * onclick sorting
 ********/


 jQuery(function ($) {
     (function () {


       var data = [
         { id: 1, year:2017, groups: 'program'},
         { id: 2, year:2017, groups: 'video'},
         { id: 3, year:2015, groups: 'design'},
         { id: 4, year:2017, groups: 'video'},
         { id: 5, year:2017, groups: 'design'},
         { id: 6, year:2016, groups: 'video'},
         { id: 7, year:2017, groups: '3d'},
         { id: 8, year:2017, groups: 'video'},
         { id: 9, year:2016, groups: '3d'},
         { id: 10,year:2016, groups: 'video'},
         { id: 11,year:2014, groups: '3d'},
         { id: 12,year:2016, groups: 'mobile'},
         { id: 13,year:2015, groups: 'video'},
         { id: 14,year:2014, groups: '3d'},
         { id: 15,year:2015, groups: 'mobile'},
         { id: 16,year:2015, groups: '3d'},
         { id: 17,year:2015, groups: 'video'},
         { id: 18,year:2015, groups: 'photo'},
         { id: 19,year:2015, groups: 'mobile'},
         { id: 20,year:2015, groups: 'video'},
         { id: 21,year:2014, groups: '3d'},
         { id: 22,year:2014, groups: 'photo'},
         { id: 23,year:2014, groups: 'video'},
         { id: 24,year:2016, groups: 'photo'},
         { id: 25,year:2014, groups: 'web'},
         { id: 26,year:2014, groups: 'web'},
         { id: 27,year:2017, groups: 'web'},
         { id: 28,year:2014, groups: 'program'},
         { id: 29,year:2014, groups: 'program'},
       ];
       var block = $('#main-slider ul');
       var attr;
       var tagFilterArray;
       var htmlObject;

       if ($(window).width() > 1000) {
         if (window.matchMedia("(min-width: 1001px)").matches) {


                   var title = 'BO 0018/S / D28JJ'; //$('#po13342').find(":selected").text();
                   var startIndex = $("a[title='"+title+"']").parent().index();
                   var $frame = $('#main-slider');
                   var $wrap = $frame.parent();

                   // Call Sly on frame
                   var options = {
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
                       speed: 300,
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

                   var sly = new Sly($frame, options).init();
                   var totalItems = sly.items.length;
                   if (totalItems < 10) {
                     totalItems = '0' + totalItems;
                   }
                   $('.scrollbar__total').text(totalItems);

                   window.addEventListener("resize", function() {

                     // slyInstance.reload();

                     sly.reload();

                   });

                   sly.on('change', function (eventName) {
                       var currentItem = this.rel.activeItem + 1;
                       if (currentItem < 10) {
                         currentItem = '0' + currentItem;
                       }
                       $('#js-huge-num').text(currentItem);

                       $(this).sly('reload');
                   });


         } //- EOF matchMedia
       }   //- EOF (window).width





       $('.sort__link').on("click", function(event) {
         event.stopPropagation(); /* important */

         attr = $(this).attr("data-group");
         tagFilterArray = data.filter(function(item) {
           return item.year == attr;
         });

         console.log(tagFilterArray);

         totalItems = tagFilterArray.length;
         console.log(totalItems);
         if (totalItems < 10) {
           totalItems = '0' + totalItems;
         }

         console.log(totalItems);
         $('#js-huge-num').text(totalItems);


         // if ($(this).parent('li').hasClass('active')){
         //   return false;
         // }

         sly.destroy();
         block.empty();

         htmlObject = updateData(tagFilterArray);

         console.log(htmlObject);
         block.append(htmlObject.join(''));

         sly.init();

         makeUlsToBeColumns();

         //- 1) сделать первый слайд активным и перейти к нему
         sly.activate(1);
         setTimeout(function(){
           sly.activate(0);
         }, 300);



       }); //- EOF on.click (search by year)


       $('.nav__item').on("click", function(event) {
         event.stopPropagation(); /* important */

         $('.nav__item').removeClass('active');
         $(this).addClass('active');

         attr = $(this).attr("data-group");
         tagFilterArray = data.filter(function(item) {
           return item.groups == attr;
         });
         totalItems = tagFilterArray.length;
         if (totalItems < 10) {
           totalItems = '0' + totalItems;
         }
         $('#js-huge-num').text(totalItems);


         sly.destroy();
         block.empty();

         htmlObject = updateData(tagFilterArray);

         block.append(htmlObject.join(''));

         sly.init();

         makeUlsToBeColumns();

         sly.activate(1);
         setTimeout(function(){
           sly.activate(0);
         }, 300);


       }); //- EOF on.click (search by tag name)





       function updateData(inputData){
         var updatedData = [];
         updatedData = inputData.map(function(el){
           return '<li>' +
                     '<div class="content__item animated" data-id="' + el.id + '" data-year="' + el.year + '" data-groud="' + el.groups + '">' +
                       '<div class="content__container">' +
                         '<aside class="aside">' +
                           '<div class="aside__content">' +
                             '<div class="aside__title">Lorem ipsum </div>' +
                             '<div class="aside__subtitle">dolor sit amet,</div>' +
                             '<div class="aside__subtitle">consectetur adipiscing elit.</div>' +
                           '</div>' +
                         '</aside>' +
                         '<div class="desc">' +
                           '<div class="desc__outer">' +
                             '<div class="desc__main-title">portofino</div>' +
                             '<div class="desc__subtitle">beach resort</div>' +
                           '</div>' +
                           '<ul class="desc__list split-list">' +
                             '<li class="desc__item"> Lorem ipsum</li>' +
                             '<li class="desc__item"> Donec pharetra</li>' +
                             '<li class="desc__item"> Nunc porta</li>' +
                             '<li class="desc__item"> Nullam sed</li>' +
                             '<li class="desc__item"> Quisque viverra </li>' +
                             '<li class="desc__item"> Vestibulum porta</li>' +
                           '</ul>' +
                         '</div><img src="./images/item-image.jpg" alt="" class="content__image"/>' +
                         '<div class="desc__text">' +
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod nulla vitae sem blandit, id interdum magna porttitor.' +
                           '<div class="view-more__content">More Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod nulla vitae sem blandit, id interdum magna porttitor. </div>' +
                         '</div>' +
                         '<div class="bordered"></div>' +
                         '<div class="bordered-arrowed">' +
                           '<div class="bordered-arrowed__top-line"></div>' +
                           '<div class="bordered-arrowed__bottom-line"></div><a href="javascript:;" class="content__more">view more</a>' +
                         '</div>' +
                       '</div>' +
                     '</div>' +
                     '<div class="view-more">' +
                       '<div class="view-more__title">view more</div>' +
                     '</div>' +
                   '</li>';
         });
         return updatedData;
       }

       function makeUlsToBeColumns(){
         var num_cols = 3,
         container = $('.split-list'),
         listItem = 'li',
         listClass = 'sub-list';
         container.each(function() {
             var items_per_col = [],
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
             for (var s = 0; s < num_cols; s++) {
                 $(this).append($('<ul ></ul>').addClass(listClass));
                 for (var j = 0; j < items_per_col[s]; j++) {
                     var pointer = 0;
                     for (var k = 0; k < s; k++) {
                         pointer += items_per_col[k];
                     }
                     $(this).find('.' + listClass).last().append(items[j + pointer]);
                 }
             }
         });
       }



         //
     }());
 });
