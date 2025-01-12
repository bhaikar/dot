document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  // let menuIcon = document.getElementById("menu-icon");
let rotate_1=document.getElementById('rotate_1');
let rotate_2=document.getElementById('rotate_2');
let hide_1=document.getElementById('hide_1');
let hide_2=document.getElementById('hide_2');

  menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("show");
      // console.log(navLinks.classList.value)
      if (navLinks.classList.value == "nav-links show"){
          rotate_1.style.transform = "rotate(45deg)";
          rotate_2.style.transform = "rotate(-45deg)";
          hide_1.style.zIndex = "-1";
          hide_2.style.zIndex = "-1";
      }
      if (navLinks.classList.value == "nav-links"){
          rotate_1.style.transform = "rotate(0deg)";
          rotate_2.style.transform = "rotate(0deg)";
          hide_1.style.zIndex = "0";
          hide_2.style.zIndex = "0";
      }
      
  });
});


(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);