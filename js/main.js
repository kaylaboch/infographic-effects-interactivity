var $drinks= $('.drinks');

$drinks.waypoint(function (direction) {
  if (direction == 'down') {
    $drinks.addClass('js-drinks-animate');
  } else {
    $drinks.removeClass('js-drinks-animate');
  }
}, { offset: '50%' });
