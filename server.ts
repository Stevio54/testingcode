/// <reference path="./_all.d.ts" />
import * as express from "express";
import * as path from "path";

module Server {
    export class Server {
        public app: express.Application;

        static bootstrap(): Server {
            return new Server();
        }

        constructor() {
            this.app = express();
        }

        start() {
            let _serv = this.app.listen(process.env.PORT | 3002, () => {
                console.log("Example app listening at http://%s:%s", _serv.address().address, _serv.address().port);
            });
            console.log(path.normalize(__dirname + '\\'));
            this.app.use(express.static(path.normalize(__dirname + '\\')));
        }
    }
}

export = Server;