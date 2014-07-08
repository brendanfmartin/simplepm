// data.js

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
		arr.push(key+value && key+JSON.parse(value));
	}
    return arr;
}