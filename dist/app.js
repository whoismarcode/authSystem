"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(function (connection) {
    // here you can start to work with your entities
})["catch"](function (error) { return console.log(error); });
