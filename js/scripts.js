edgrid.menu('main-nav','main-menu');

$nav = $("#nav-container");
$inicio = $("#inicio").height();
$lis = $("#main-menu").children();
var sliced = Array.prototype.slice.call( $lis );

// var scroll = new SmoothScroll('a[href*="#"]', {
// 	// Selectors
// 	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
// 	header: null, // Selector for fixed headers (must be a valid CSS selector)
// 	updateURL: false, 
// 	// Speed & Easing
// 	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
// 	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
// 	easing: 'easeInOutCubic', // Easing pattern to use
// 	customEasing: function (time) {}, // Function. Custom easing pattern

// 	// Callback API
// 	before: function () {}, // Callback to run before scroll
// 	after: function () {} // Callback to run after scroll
// });

smoothScroll.init({
  selector: '[data-scroll]', 
  selectorHeader: '[data-scroll-header]', 
  speed: 1500, 
  easing: 'easeInOutCubic', 
  offset: $inicio+'px', 
  updateURL: false, 
	callback: function ( anchor, toggle ) {
		console.log(anchor);
		sliced.map((e)=>{
			$a = e.children;
			var slic= Array.prototype.slice.call(  e.children );
			console.log(slic[0].classList.remove("active"));
		})
		toggle.classList.add("active");

	}
});


lightbox.option({
	'resizeDuration': 200,
	'wrapAround': true
});



(function(d){
  let nav = d.getElementById('nav-container');
  let top = nav.offsetTop;
  window.addEventListener('scroll', () => {
    let scroll = d.body.scrollTop;
    if (scroll >= top) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
	});
	

})(document);



$( document ).ready(function() {      
	var isMobile = window.matchMedia("only screen and (max-width: 760px)");

	if (isMobile.matches) {
			//Conditional script here
			smoothScroll.destroy();
	}
});



jQuery(window).scroll(function(){
	//console.log($inicio);
	if (jQuery(this).scrollTop() > $inicio) {
			//console.log("Antes");
			$nav.addClass("sticky");
	} else {
			//console.log("Despues");
			$nav.removeClass("sticky");
	}
});


