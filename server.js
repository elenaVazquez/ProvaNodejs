var http = require("http");
var url = require('url');
var q = require("querystring");

function init(route, handler, serial) {
	
	function onRequest(request, response) {
		//per rebre les dades en utf-8
		request.setEncoding('utf8');
		
		//agafem la informació de la url 
		var urlInfo = url.parse(request.url, true);
	
		if(request.method == 'GET'){
			//agafem els parametres de la url amb els que volem realitzar l'operació 
			var val1 = parseInt(urlInfo.query.par1);
			var val2 = parseInt(urlInfo.query.par2);
			
			//cridem a la funció del router per a que s'encarregui de repartir la feina 
			route(serial, handle, urlInfo.pathname, val1, val2, function (result) {
																	response.writeHead(200, {});
																	response.write(result);
															        response.end();
																});
		}
		
		if(request.method == 'POST') {
			var params = '';
			//agafem els paràmetres passats per post 
			request.addListener('data', function (data) {
				params += data;
			});

			request.addListener('end', function () {
				var dataPOST = JSON.parse(params);
				var val1 = parseInt(dataPOST.par1);
				var val2 = parseInt(dataPOST.par2);

				route(serial, handle, urlInfo.pathname, val1, val2, function (result) {
					 											response.writeHead(200, {});
					 											response.write(result);
					 									        response.end();
															});
			});
		}
	}
	http.createServer(onRequest).listen(8888, 'localhost');
}
exports.init = init;



/*
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
				break;
		}
		
		res.end();
	}
	if(req.method == 'POST'){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("e");
	}
	
});*/

