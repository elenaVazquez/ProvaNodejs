
function sum(val1, val2, res) {
	var result = val1+val2;
	res(result);
}

function res(val1, val2, res) {
	var result = val1-val2;
	res(result);
}
function mul(val1, val2, res) {
	var result = val1*val2;
	res(result);
}

function div(val1, val2, res) {
	var result = val1/val2;
	res(result);
}

exports.sum = sum;
exports.res = res;
exports.mul = mul;
exports.div = div;