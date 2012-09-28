
var server = require("./server");
var router = require("./router");
var operationHandler = require("./handler");
var serial = require("./serial");

var handle = {};
handle["/sum"] = operationHandler.sum;
handle["/res"] = operationHandler.res;
handle["/mul"] = operationHandler.mul;
handle["/div"] = operationHandler.div;



server.init(router.route, handle, serial);