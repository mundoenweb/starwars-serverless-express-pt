"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerErrors = exports.error404 = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const helperCreateError_1 = require("../utils/helperCreateError");
const error404 = (req, _res, next) => {
    const error = {
        path: req.path,
        method: req.method,
        message: 'Ruta o metodo desconocidos'
    };
    next((0, http_errors_1.default)(404, error));
};
exports.error404 = error404;
const handlerErrors = (err, _req, res, _next) => {
    const error = (0, helperCreateError_1.helperCreateError)(err);
    res.status(error.status);
    res.json(error);
};
exports.handlerErrors = handlerErrors;
// const customError = (error) => {
//   if (!error.code) return error
//   switch (error.code) {
//     case 'ER_DUP_ENTRY':
//       return {
//         ...error,
//         message: `${error.table} duplicado (a)`,
//         status: 400
//       }
//     case 'ER_NO_SUCH_TABLE':
//       return {
//         ...error,
//         message: `La tabla ${error.table} no existe`
//       }
//     case 'ER_ROW_IS_REFERENCED_2':
//       return {
//         ...error,
//         message: 'No puede eliminar el elemento, debido a que esta siendo usado',
//         status: 400
//       }
//     default:
//       return {
//         ...error,
//         message: error.message || 'Error interno, intenta más tarde'
//       }
//   }
// }
