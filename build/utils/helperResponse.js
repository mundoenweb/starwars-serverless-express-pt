"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperResponse = void 0;
const helperResponse = (res, data, code = 200, message) => {
    const response = { data, message, status: code };
    res.status(code);
    res.json(response);
};
exports.helperResponse = helperResponse;
