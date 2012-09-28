
function route(serial, handle, pathname, params, response) {
	if(typeof handle[pathname] == 'function') {
		var val = serial.parse(params);
		var val1 = val.par1;
		var val2 = val.par2;
		handle[pathname](val1, val2, 
				function(result) {
					serial.stringify(result, function(r){
								   		response(r);
								   });
				});
	}
	else {
		return "No s'ha pogut realitzar";
	}
}

exports.route = route;