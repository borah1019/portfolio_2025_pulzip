$(function () {
  
  /* Header */
  // GNB
  function gnb() {
    $('#header #gnb>li>a').mouseenter(function () {
      $(this).css('border-bottom', 0);
      $(this).parent().css('border-bottom', '4px solid var(--main1)');
      $('#header nav').css('height', '180px');
      $('#header #gnb .dep2').css('display', 'none');
      if ($('#header nav').css('height') === '100px') {
        setTimeout(() => {
          $(this).next('.dep2').css('display', 'flex');
        }, 200);
      } else {
        $(this).next('.dep2').css('display', 'flex');
      };
    }).mouseout(function () {
      $(this).parent().css('border-bottom', 0);
      $('#header nav').mouseleave(function () {
        $('#gnb .dep2').css('display', 'none');
        $(this).css('height', '100px');
      });
    });
  }
  gnb();
  
  // Util - Language
  const $btnLanguageBox = $('#header .util .language_box');
  const $btnLanguage = $('#header .util .language');
  const $btnLanguageChange = $('#header .util .language .btn_language_change');
  function languageChange() {
    $btnLanguageBox.hide();
    if ($(window).width() > 1450) { 
      $btnLanguageChange.css('transform', 'translateY(-3px) rotate(45deg)');
    } else if ($(window).width() <= 1450) {
      $btnLanguageChange.css('transform', 'none');
    }
    $btnLanguage.click(function () {
      if ($(window).width() > 1450) {
        if ($btnLanguageBox.css('display') === 'none') {
          $btnLanguageBox.css('display', 'flex');
          $btnLanguageChange.css('transform', 'translateY(2px) rotate(-135deg)');
        } else if ($btnLanguageBox.css('display') === 'flex') {
          $btnLanguageBox.hide();
          $btnLanguageChange.css('transform', 'translateY(-3px) rotate(45deg)');
        }
      } else if ($(window).width() <= 1450) {
        if ($btnLanguageBox.css('display') === 'none') {
          $btnLanguageBox.css('display', 'flex');
        } else if ($btnLanguageBox.css('display') === 'flex') {
          $btnLanguageBox.hide();
        }
      }
    });
  }
  languageChange();
  
  // Util - Search
  $('#header .util .btn_search_open').click(function () {
    $(this).next('.search_wrap').slideDown(200);
  })
  $('#header .util .search_box .btn_search_close').click(function () {
    $(this).parents('.search_wrap').slideUp(200);
  })
  $('#header .util .recent .btn_recent_remove').click(function () {
    $(this).parent().remove();
  })

  // All Menu
  const $allMenu = $('#header .all_menu');
  const $allMenuList = $('#header .all_menu>li');
  const $btnAllMenu = $('#header .util .btn_all_menu');
  function allMenu() {
    if ($(window).width() > 1450) {
      $allMenu.css('display', 'none');
      $btnAllMenu.removeClass('on');
    } else if ($(window).width() <= 1450) {
      $btnAllMenu.click(function () {
        if ($allMenu.css('display') === 'none') {
          $(this).addClass('on');
          $($allMenu).css('display', 'flex');
        } else if ($allMenu.css('display') === 'flex') {
          $(this).removeClass('on');
          $($allMenu).css('display', 'none');
        }
      });
      $('#header .all_menu>li>a').click(function () {
        const allMenuListNum = $(this).parent().index();
        const allMenuListHeight = $($allMenuList).eq(allMenuListNum).css('height', 'auto').height();
        $($allMenuList).css({
          background: 'none',
          height: '80px'
        });
        $($allMenuList).eq(allMenuListNum).css('background', '#eee').animate({
          height: allMenuListHeight
        }, 100);
      });
    }
  }
  allMenu();
  
  // Resize
  $(window).resize(function () {
    gnb();
    languageChange();
    allMenu();
  });

  /* Main - Visaul */
  // Image Width
  const $visList = $('#main .visual .swiper-wrapper');
  const $visContent = $('#main .visual .swiper-slide');
  const $visContentLeng = $visContent.length;
  $visList.width((100 * $visContentLeng)+ '%');
  $visContent.css({
    'width': 100 / $visContentLeng + '%',
  });

  // Visual Swiper
  const visualSwiper = new Swiper('#main .visual', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000
    },
    pagination: {
      el: '#main .visual .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '#main .visual .swiper-button-next',
      prevEl: '#main .visual .swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /* Main - Exhibition */
  // Exhibition Swiper
  const exhibitionSwiper = new Swiper('#main .exhibition .swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '#main .exhibition .swiper-button-next',
      prevEl: '#main .exhibition .swiper-button-prev',
    },
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      }
    }
  });

  /* Main - Notice */
  // Slide
  const $notiList = $('#main .notice .notice_wrap ul');
  const $notiContent = $('#main .notice .notice_wrap ul li');
  const $notiHeight = $('.notice .notice_wrap ul li').height();
  const $notiContentLeng = $notiContent.length;
  const notiSlideNum = 0;
  $('.notice .btns_arrow button').click(function () {
    const btnsName = $(this).attr('class');
    switch (btnsName) {
      case 'prev':
        (notiSlideNum <= 0) ? notiSlideNum : notiSlideNum--
        $notiList.animate({'margin-top': -$notiHeight * notiSlideNum});
        console.log(notiSlideNum)
        break;
      case 'next':
        (notiSlideNum >= $notiContentLeng - 1) ? notiSlideNum : notiSlideNum++;
        $notiList.animate({'margin-top': -$notiHeight * notiSlideNum});
        console.log(notiSlideNum)
    }
  });
  
  /* Main - Relic */
  // Relic Swiper
  const relicSwiper = new Swiper('#main .relic .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000
    },
    navigation: {
      nextEl: '#main .relic .swiper-button-next',
      prevEl: '#main .relic .swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000
        },
      }
    }
  });

  /* Main - Youtube */
  // Youtube Swiper
  const youtubeSwiper = new Swiper('#main .youtube .swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 10000,
    freeMode: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      750: {
        slidesPerView: 2.5
      },
    }
  });

  /* Main - Instagram */
  // Instagram Swiper
  const instagramSwiper = new Swiper('#main .instagram .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000
    },
    navigation: {
      nextEl: '#main .instagram .swiper-button-next',
      prevEl: '#main .instagram .swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      750: {
        slidesPerView: 3,
        autoplay: {
          delay: 2000,
          spaceBetween: 30,
        }
      }
    }
  });

  /* Main - Map */
  // Daum Map
  new daum.roughmap.Lander({
    "timestamp" : "1706600724134",
		"key" : "2hw43",
		"mapWidth" : "640",
		"mapHeight" : "360"
	}).render();
  
  // Map Buttons
  $('.map .btns_map button').click(function () {
    const btnNum = $(this).index();
    $('.map .btns_map button').removeClass('on');
    $(this).addClass('on');
    $('.map .map_list>li').hide();
    $('.map .map_list>li').eq(btnNum).show();
  });
});
