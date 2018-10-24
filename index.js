//$(document).ready(function() {
//	$('#fullpage').fullpage({
//		//options here
//		autoScrolling:true,
//		scrollHorizontally: true
//	});
//
//	//methods
//	$.fn.fullpage.setAllowScrolling(false);
//});

var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['summary', 'experience', 'projects', 'skills', 'fun', 'fun pt2', 'contact'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: true,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	scrollOverflow: true,
	//	scrollOverflowReset: false,
	//	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: true,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	//	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	//	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){},

	onLeave: function(index, nextIndex, direction){
		activateNavItem($('#my-nav').find('li').eq(nextIndex-1));
	},
	afterRender: function(){
		activateNavItem($('#my-nav').find('li').eq($('.section.active').index()))
	}
});

function activateNavItem(item){
	item.addClass('active').siblings().removeClass('active');
}


/*
maroon, #38000e
purple, #190033
blue, #005270
dark green, #0a6027
green, #00705d
goldgreen, #434F25
gold, #703900
*/

window.addEventListener('load', init);

function init() {
	loadImages();
	$('#berkeley').mouseover(function() {
		$('#summary').css('background-image', 'linear-gradient(to top, rgba(25, 0, 51, 0.90), rgba(56, 0, 14, 0.90)), url(img/test.jpg)');
	}).mouseout(function() {
		$('#summary').css('background-image', 'linear-gradient(to top, rgb(25, 0, 51), rgb(56, 0, 14))');
	});
}
function loadImages() {
	var html = '';
	for (var i = 2; i < 74; i++) {
		html = html + '<div class="carousel-item"><img class="d-block img-fluid" src="pottery/pot' + i + '.jpg"></div>'
	}
	document.getElementById('slides').innerHTML = html;
}