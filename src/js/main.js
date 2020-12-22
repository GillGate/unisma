$(function(){
	setTimeout(function() {
		let $factsSlider = $('.facts__slider');
		let $introductionSlider = $('.introduction__slider');
		$factsSlider.slick({
	  	prevArrow: '.facts__arrow--prev',
	  	nextArrow: '.facts__arrow--next',
	  	asNavFor: '.introduction__slider',
	  	autoplay: true
	  });

	  $introductionSlider.slick({
	  	arrows: false,
	  	autoplay: true,
	  	fade: true,
	  	draggable: false,
	  	swipe: false
	  });

	  $factsSlider.on('afterChange', function() {
	  	let $sliderIndex = $('.facts__slider .facts__item.slick-current').index();
	  	$('.facts__order--current').text($sliderIndex);
	  });

	  $factsSlider.removeClass('facts__slider--unactive');
	  $introductionSlider.removeClass('introduction__slider--unactive');

	  $('.popular__list').slick({
		prevArrow: '.popular__arrow--prev',
	  	nextArrow: '.popular__arrow--next',
	  	slidesToShow: 3,
	  	responsive: [
		    {
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 746,
				settings: {
					slidesToShow: 1,
					arrows: false,
					autoplay: true,
				}
			}
		],
	  });
	});

	$('.profile__sliderLeft').slick({
		prevArrow: '.profile__arrow--prev',
		nextArrow: '.profile__arrow--next',
		asNavFor: '.profile__sliderRightList',
		responsive: [
		    {
				breakpoint: 576,
				settings: {
					autoplay: true
				}
			},
		]
	});

	$('.profile__sliderRightList').slick({
		arrows: false,
		fade: true,
		draggable: false,
		swipe: false
	});

	$('.profile__sliderLeft').on('afterChange', function() {
		let $sliderIndex = $('.profile__sliderLeft .profile__item.slick-current').index();
		$('.profile__order--current').text($sliderIndex);
	});

	$('.companies__slider').slick({
		prevArrow: '.companies__arrow--prev',
		nextArrow: '.companies__arrow--next',
		responsive: [
		    {
				breakpoint: 576,
				settings: {
					autoplay: true
				}
			},
		]
	});

	 $('.header__bar').on('click', function() {
	 	$(this).toggleClass('header__bar--open');
        $('.header__nav').toggleClass('header__nav--active');
    });

	let clWidth = document.documentElement.clientWidth;

  	if (clWidth < 1025) {
  		$(document).on('click', function(e) {
		    if (!$(e.target).closest('.header__list').length) {
		        $('.header__bar').removeClass('header__bar--open');
		    	$('.header__nav').removeClass('header__nav--active');
		    }
		    e.stopPropagation();
		});
  	}

  	$('img').magnify({
  		lensWidth: 60,
    	lensHeight: 60,
  	});

});