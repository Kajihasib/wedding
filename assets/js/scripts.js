(function ($) {
	'use strict';

	$('.play-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});

	var btn = $('.scrollTopBtn');
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
			$('.seller-popup').css('bottom', '80px');
		} else {
			$('.seller-popup').css('bottom', '10px');
			btn.removeClass('show');
		}
	});
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

	$('input[type="tel"],input[type="number"],.number').keyup(function (e) {
		if (/\D/g.test(this.value)) {
			this.value = this.value.replace(/\D/g, '');
		}
	});

	$('.slick_slider_active').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
	});
	$(document).ready(function () {
		let stickyNavTop = $('.header_area').offset().top;
		let stickyNav = function () {
			let scrollTop = $(window).scrollTop();
			if (scrollTop > stickyNavTop) {
				$('.header_area').addClass('sticky_header');
			} else {
				$('.header_area').removeClass('sticky_header');
			}
		};

		stickyNav();
		$(window).scroll(function () {
			stickyNav();
		});
	});
	// material
	$('.tabs').tabs();
	$('.collapsible').collapsible();
	$('.modal').modal();
	$('.dropdown-profile').dropdown();
	$('.material-select').formSelect();
	$('.tooltipped').tooltip();
})(jQuery);
