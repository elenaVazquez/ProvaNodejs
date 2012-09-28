
function route(serial, handle, pathname, val1, val2, response) {
	if(typeof handle[pathname] == 'function') {
		handle[pathname](val1, val2, function(result, response) {
										response(serial(reult));
										});
	}
	else {
		return "No s'ha pogut realitzar";
	}
}

exports.route = route;