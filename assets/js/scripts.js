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
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(
				event.strftime(
					'<li class="countdown_item days"><h4>%-D</h4><span>Days</span></li><li class="countdown_item hours"><h4>%-H</h4><span>Hours</span></li><li class="countdown_item minutes"><h4>%M</h4><span>Min</span></li><li class="countdown_item second"><h4>%S</h4><span>Sec</span></li>'
				)
			);
		});
	});
	// material
	$('.tabs').tabs({
		swipeable: true,
		responsiveThreshold: Infinity,
	});
	$('.collapsible').collapsible();
	$('.modal').modal();
	$('.dropdown-profile').dropdown();
	$('.material-select').formSelect();
	$('.tooltipped').tooltip();
})(jQuery);

var textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
	.timeline({ loop: true })
	.add({
		targets: '.text .letter',
		translateX: [40, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: 'easeOutExpo',
		duration: 1200,
		delay: (el, i) => 500 + 30 * i,
	})
	.add({
		targets: '.text .letter',
		translateX: [0, -30],
		opacity: [1, 0],
		easing: 'easeInExpo',
		duration: 1100,
		delay: (el, i) => 100 + 30 * i,
	});
