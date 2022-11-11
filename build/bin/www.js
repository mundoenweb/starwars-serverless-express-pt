"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(index_1.app);
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return '3467';
};
const port = normalizePort('3467');
index_1.app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    const bind = (typeof port === 'string')
        ? `Pipe ${port}`
        : `Port ${port}`;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            return process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            return process.exit(1);
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    if (addr === null) {
        return;
    }
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : `port ${addr.port}`;
    console.log('Runnig server:', bind);
}
