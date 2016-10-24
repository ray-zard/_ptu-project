$(document).ready(function() {

  $(document).foundation();

  var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });

  $grid.on( 'click', '.grid-item', function() {
    // change size of item by toggling gigante class
    $( '.grid-item.x-large-4' ).not(this).removeClass('x-large-4');
    $(this).toggleClass('x-large-4');
    $grid.isotope('layout');
  });


	$('.logo-line').slick({
		arrows: false,
		autoplay: true,
		speed: 1250,
	  autoplaySpeed: 1000,
		infinite: true,
		centerMode: true,
		slidesToShow: 5,
		variableWidth: true,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '192px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 3
			  }
			}
		  ]
	});

});
