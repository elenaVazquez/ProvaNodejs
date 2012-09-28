
function parse(val) {
	var r = JSON.parse(val);
	return r;
}

function stringify(val, ret) {
	var r = JSON.stringify(val);
	ret(r);
}

exports.parse = parse;
exports.stringify = stringify;
