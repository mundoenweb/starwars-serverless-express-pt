"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyParamId = void 0;
const helperCreateError_1 = require("../../../utils/helperCreateError");
const verifyParamId = (req, _res, next) => {
    try {
        const { id } = req.params;
        const expNum = /^[1-9-0]+$/;
        if (!expNum.test(id)) {
            throw new Error('Favor pasar un id valido (númerico)');
        }
        req.body = { id: parseInt(id) };
        next();
    }
    catch (error) {
        next((0, helperCreateError_1.helperCreateError)(error, 400, error.message));
    }
};
exports.verifyParamId = verifyParamId;
