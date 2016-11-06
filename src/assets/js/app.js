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
    if ( $(this).hasClass('large-4') ) {
      $( '.grid-item.x-large-4' ).not(this).removeClass('x-large-4 x-large-8');
      $( '.grid-item.large-12' ).not(this).removeClass('x-large-8 large-12').addClass('large-8');
      $(this).addClass('x-large-4');
    }
    else {
      $( '.grid-item.large-8' ).not(this).removeClass('large-8');
      $( '.grid-item.x-large-4' ).not(this).removeClass('x-large-4');
      $(this).addClass('x-large-8 large-12').removeClass('large-8');
    }
    $grid.isotope('layout');
  });

  var $newsGrid = $('.news-grid').isotope({
    // options
    itemSelector: '.news-grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.news-grid-sizer'
    }
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
	});

  $('#tagAir').tagcanvas({
    pulsateTo : 0,
    textColour : '#f8f8f8', // Цвет текста
    maxSpeed : 0.03, // Максимальная скорость
    depth : 0.9, // Глубина. От 0 до 1
    wheelZoom : 0,
    weight : true,
  });

});
