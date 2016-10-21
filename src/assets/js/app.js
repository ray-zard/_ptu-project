$(document).ready(function() {

  $(document).foundation();

  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

});
