/*
//
// notification.js
//
//
 */

/*

	levels: info, success, warning, failure
 */
function Notification(title, level) {
		this.title = title,
		this.level = level;
}


/*

 */
Notification.prototype.alert = function() {
	// get the new width based on title length
	var newWidth = (this.title.length+10)*10;
	// get the new margin to center
	var newMargin = -(newWidth/2);
	// set alert so you only search through DOM once
	$alert = $('#alert');
	// remove all classes
	$alert
		.removeClass()
		.addClass(this.level)
		.html(this.title);
	// add in new width and margin
	$alert.css({'width': newWidth, 'margin-left': newMargin});
	// show and hide
	// $alert.fadeIn(2000).delay(1500).fadeOut(2000);
}