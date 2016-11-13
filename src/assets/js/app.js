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
    activeCursor : 'default',
    pulsateTo : 0,
    textColour : '#f8f8f8', // Цвет текста
    depth : 0.9, // Глубина. От 0 до 1
    wheelZoom : 0,
    outlineMethod: 'colour',
    outlineColour: '#f8f8f8',
    outlineOffset: 0,
    maxSpeed : 0.025, // Максимальная скорость
    weight : true,
    initial: [0.100, 0.140],
    noMouse : true,
  });

  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

  $('.news-galery, .honors').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      }
    });
  })

  $('.news-galery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

});
