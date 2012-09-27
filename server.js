var http = require("http");
var url = require('url');
var q = require("querystring");

function init(route, handler){
	function onRequest(request, response){
		var url_info = url.parse(req.url, true);
		route(handle, pathname);
	}
}
var server = http.createServer().listen(8888, 'localhost');

server.on('request', function(req,res){
	res.writeHead(200, {"Content-Type": "text/html"});
	if(req.method == 'GET'){
		
		var val1 = parseInt(url_info.query.par1);
		var val2 = parseInt(url_info.query.par2);
		
		switch(url_info.pathname){
			
			case '/sum':
				var aux= val1+val2;
				res.write("El resultat de la suma:"+val1+"+"+val2+"="+aux+";");
				break;
			
			case '/res':
				var aux= val1-val2;
				res.write("El resultat de la resta:"+val1+"-"+val2+"="+aux+";");
				break;
			
			case '/mul':
				var aux= val1*val2;
				res.write("El resultat de la multiplicacio:"+val1+"*"+val2+"="+aux+";");
				break;
			
			case '/div':
				var aux= val1/val2;
				res.write("El resultat de la divisio:"+val1+"/"+val2+"="+aux+";");
				break;
			
			/*case '/':
				res.writeHead(200, {"Content-Type": "text/html"});
				res.write("ERROR");
				break;*/
		}
		
		res.end();
	}
	if(req.method == 'POST'){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("e");
	}
	
});

