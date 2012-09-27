var server = require("./server");
var router = require("./router");
var operationHandler = require("./handler");

var handle = {}
handle["/sum"] = hoperationHandler.sum;
handle["/res"] = operationHandler.res;
handle["/mul"] = operationHandler.mul;
handle["/div"] = operationHandler.div;

server.init(router.route, handle);