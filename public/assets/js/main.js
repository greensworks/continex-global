/***************************************************
==================== JS INDEX ======================
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);


	// PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	// Common Js//
	$("[data-background]").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-height]").each(function () {
		$(this).css("height", $(this).attr("data-height"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});


	// header height js
	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;
		
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	  }


	//  Nice Select Js//
	$('.tp-select').niceSelect();


	// ==========================
	// Open Handlers
	// ==========================
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area, .body-overlay").addClass("opened");
	});

	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area, .body-overlay").addClass("opened");
	});

	// ==========================
	// Close Handlers
	// ==========================
	$(".tp-offcanvas-close-btn, .tp-search-close-btn, .body-overlay").on("click", function () {
		$(".tp-offcanvas-area, .tp-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	// magnificPopup img view //
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	// magnificPopup video view //
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	// Counter Js //
	new PureCounter();


	// Smooth Scroll Js//
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			let target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 60
				}, 1500);
			}
		});
	}
	smoothSctoll();


	// back to top //
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');
		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	// mobile menu Js//
	let tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	let tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.submenu, .mega-menu').length != 0) {
		$(tpSideMenu).find('.submenu, .mega-menu').parent().append
			('<button class="tp-menu-close"></button>');
	}
	let sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a, .tp-offcanvas-menu nav > ul li.has-dropdown > ul > li.menu-item-has-children > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).siblings('.submenu, .mega-menu').slideToggle();
	});


	// Sticky Header
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});



	// Motion effects disabled intentionally.
	// Keep layout, menus, forms, counters, and media behavior without scroll/entrance animations.


	// file upload js
	document.addEventListener("DOMContentLoaded", () => {
		document.querySelectorAll(".tp-file-upload").forEach((box) => {
			const input = box.querySelector(".file-input");
			const preview = box.querySelector(".preview-image");
			const content = box.querySelector(".tp-file-upload-content-pos");

			if (!input || !preview) return;

			input.addEventListener("change", (e) => {
				const [file] = e.target.files;

				if (file && file.type.startsWith("image/")) {
					preview.src = URL.createObjectURL(file);
					preview.style.display = "block";
					
					if (content) content.style.display = "none";
					preview.onload = () => URL.revokeObjectURL(preview.src);
				}
			});
		});
	});



})(jQuery);
