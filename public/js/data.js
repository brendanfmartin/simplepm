// data.js
'use strict';
// set method for storing JSON object in localStorage
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

// get method for retrieving JSON object in localStorage
Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

// get method for retrieving all JSON objects in localStorage
Storage.prototype.getAllObjects = function() {
	var arr = [];
	for(var i=0, len=localStorage.length; i<len; i++) {
		var key = localStorage.key(i), value = localStorage[key];
		arr.push(JSON.parse(value));
	}
    return arr;
}

// get method for retrieving all JSON objects names in localStorage
Storage.prototype.getAllObjectNames = function() {
	var arr = [];
	for(var i=0, len=localStorage.length; i<len; i++) {
		var key = localStorage.key(i);
		arr.push(key);
	}
    return arr;
}


// get method for retrieving all JSON objects in localStorage
Storage.prototype.getSingleObject = function() {
	var key = localStorage.key(0), value = localStorage[key];
	return JSON.parse(JSON.parse(value));
}
