import { Log } from 'sener-log';
import { Config } from 'sener-config';
import { Json } from 'sener-json';
import { Form } from 'sener-form';
// import { RPC } from 'sener-rpc';
import { Static } from 'sener-static';
// import { Mysql } from 'sener-mysql';
// import { MongoDB } from 'sener-mongodb';
import { Sener, Cors } from 'sener';
import router from './router';
import middlewares from './middleware';
import path from 'path';

const dir = path.resolve(__dirname, '../sener-data');

new Sener({
    port: 9000,
    middlewares: [
        new Log(),
        new Config(),
        new Json(),
        new Form(),
        new Cors(),
        new Static(),
        router,
        ...middlewares
        // new RPC({
        //     test: 'http://localhost:3003'
        // }),
        // new Mysql({
        //     //  Please refer to (https://www.npmjs.com/package/mysql) for details
        // })
        // new MongoDB({
        //     //  Please refer to (https://www.npmjs.com/package/mongodb) for details
        // })
    ]
});