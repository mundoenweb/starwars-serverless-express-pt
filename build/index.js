"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.handler = void 0;
/* eslint-disable import/first */
require('./config/connection');
const serverless_http_1 = __importDefault(require("serverless-http"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const errors_1 = require("./middleware/errors");
const app = (0, express_1.default)();
exports.app = app;
// middlewares
app.use(express_1.default.json());
app.use(index_1.default);
// helper errors
app.use(errors_1.error404);
app.use(errors_1.handlerErrors);
const handler = (0, serverless_http_1.default)(app);
exports.handler = handler;
