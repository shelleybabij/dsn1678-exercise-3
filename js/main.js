
var sales__details_left = $('.sales__details_left');
var clickArea_left = $('.sales_left');

var detailsshow = function () {
	var currentState = sales__details_left.attr('data-state');
	if (currentState == 'active') {
		sales__details_left.attr('data-state', 'inactive');
	} else {
		sales__details_left.attr('data-state', 'active');
	}
};

clickArea_left.on('click', detailsshow);

var sales__details_right = $('.sales__details_right');
var clickArea_right = $('.sales_right');

var detailsshow = function () {
	var currentState = sales__details_right.attr('data-state');
	if (currentState == 'active') {
		sales__details_right.attr('data-state', 'inactive');
	} else {
		sales__details_right.attr('data-state', 'active');
	}
};

clickArea_right.on('click', detailsshow);
