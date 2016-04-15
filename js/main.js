var $drinks= $('.drinks');
var $people= $('.people');

$drinks.waypoint(function (direction) {
  if (direction == 'down') {
    $drinks.addClass('js-drinks-animate');
  } else {
    $drinks.removeClass('js-drinks-animate');
  }
}, { offset: '50%' });

$people.waypoint(function (direction) {
  if (direction == 'down') {
    $people.addClass('js-people-animate');
  } else {
    $people.removeClass('js-people-animate');
  }
}, { offset: '50%' });
