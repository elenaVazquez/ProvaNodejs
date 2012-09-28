
var querystring = require('querystring');  
var http = require('http');  
  
var post_data = querystring.stringify({  
	'par1' : 2,  
	'par2': 3  
});  
  
var post_options = {  
	 host: 'localhost',  
	 port: 8888,  
	 path: 'http://prova.cat/sum',  
	 method: 'POST',  
	 headers: {  
		 'Content-Type': 'application/x-www-form-urlencoded',  
		 'Content-Length': post_data.length  
	 }  
};  
  
var post_req = http.request(post_options, function(res) {  
	var data = '';
	res.setEncoding('utf8');  
	res.on('data', function (chunk) {  
		data += chunk;
	});  
});  
    
post_req.write(post_data);  
post_req.end();  