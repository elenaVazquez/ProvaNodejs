function sum(val1, val2, response) {
	var result = val1+val2;
	response(result);
}

function res(val1, val2, response) {
	var result = val1-val2;
	response(result);
}
function mul(val1, val2, response) {
	var result = val1*val2;
	response(result);
}

function div(val1, val2, response) {
	var result = val1/val2;
	response(result);
}

exports.sum = sum;
exports.res = res;
exports.mul = mul;
exports.div = div;