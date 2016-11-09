"use strict";
/// <reference path="./_all.d.ts" />
var express = require("express");
var path = require("path");
var Server;
(function (Server_1) {
    var Server = (function () {
        function Server() {
            this.app = express();
        }
        Server.bootstrap = function () {
            return new Server();
        };
        Server.prototype.start = function () {
            var _serv = this.app.listen(process.env.PORT | 3002, function () {
                console.log("Example app listening at http://%s:%s", _serv.address().address, _serv.address().port);
            });
            console.log(path.normalize(__dirname + '\\'));
            this.app.use(express.static(path.normalize(__dirname + '\\')));
        };
        return Server;
    }());
    Server_1.Server = Server;
})(Server || (Server = {}));
module.exports = Server;
//# sourceMappingURL=server.js.map