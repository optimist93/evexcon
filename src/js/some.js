
$(function() {

	$('.main-slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	$('.communities').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><img src="build/img/shevron-right.svg" alt="стрелка"></div>',
		prevArrow: '<div class="arrow arrow_left"><img src="build/img/shevron-left.svg" alt="стрелка"></div>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.work-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '<div class="arrow arrow_right"><img src="build/img/our-work/work_right.svg" alt="стрелка"></div>',
		prevArrow: '<div class="arrow arrow_left"><img src="build/img/our-work/work_left.svg" alt="стрелка"></div>',
	});
	$('.farm-list').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><img src="build/img/shevron-right.svg" alt="стрелка"></div>',
		prevArrow: '<div class="arrow arrow_left"><img src="build/img/shevron-left.svg" alt="стрелка"></div>',
	});
	$('.contacts-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><img src="build/img/our-work/work_right.svg" alt="стрелка"></div>',
		prevArrow: '<div class="arrow arrow_left"><img src="build/img/our-work/work_left.svg" alt="стрелка"></div>'
	});
	$('.schools-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right">&rarr;</div>',
		prevArrow: '<div class="arrow arrow_left">&larr;</div>',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.modal-portfolio_list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><img src="build/img/our-work/work_right.svg" alt="стрелка"></div>',
		prevArrow: '<div class="arrow arrow_left"><img src="build/img/our-work/work_left.svg" alt="стрелка"></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.modal-communities').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><img src="build/img/shevron-right.svg" alt="стрелка"></div>',
		prevArrow: '<div class="arrow arrow_left"><img src="build/img/shevron-left.svg" alt="стрелка"></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]

	});

	$('#tel').mask('+7(999)999-99-99');

		// modals
	
	modal($('.portfolio-list li'), $('.m-portfolio'));
	modal($('.feedback-btn'), $('.modal-contact'));
	modal($('.communities-item'), $('.modal-about-partner'));
	modal($('.service-item'), $('.modal-service'));
	
	function modal(btn, modal){
		btn.on('click', function(){
			modal.addClass('modal-overlay-show');
		});
		$('.modal-close').on('click', function() {
			modal.removeClass('modal-overlay-show');
		});
	}

	$('.select2').select2({
		placeholder: "Выберите тему обращения",
		minimumResultsForSearch: Infinity
	});
	
}); // end jquery