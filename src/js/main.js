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

  	$('.form__radioboxItem').on('click', function() {
  		$('.form__radioboxItem').removeClass('form__radioboxItem--checked');
  		$('.form__radioboxItem input:checked').closest('.form__radioboxItem').addClass('form__radioboxItem--checked');
  	});

  	$('.accordeon__title').on('click', function() {
  		$(this).next().slideToggle();
        $('.accordeon__title').not(this).next().slideUp();
  	});

  	$('.page__link--toForm').on('click', function(e) {
	    e.preventDefault();

	    let target = $(this).attr('href');

	    $('html, body').animate({
	      scrollTop: $(target).offset().top - 20
	    }, 700);

	    $('.form__input:first input').focus();
	});

	$('.product__slider').slick({
		prevArrow: '.product__arrow--prev',
		nextArrow: '.product__arrow--next',
		asNavFor: '.product__sliderNav'
	});

	$('.product__sliderNav').slick({
		slidesToShow: 4,
		arrows: false
	});

	$('.product__slider').on('afterChange', function() {
		let $sliderIndex = $('.product__slider .product__sliderItem.slick-current').index();
		$('.product__order--current').text($sliderIndex);
	});

	$('.scrollbar-inner').scrollbar();

});