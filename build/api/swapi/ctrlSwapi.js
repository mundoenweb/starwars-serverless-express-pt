"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceSWAPI = exports.getAllResourceSWAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../../config/config"));
const helperTransforObjectSwapi_1 = require("./utils/helperTransforObjectSwapi");
const helperResponse_1 = require("../../utils/helperResponse");
const url_1 = __importDefault(require("url"));
const getAllResourceSWAPI = async (req, res, next) => {
    try {
        const { resource } = req.params;
        const { format } = req.query;
        const urlParse = url_1.default.parse(req.url);
        const search = urlParse.search === null ? '' : urlParse.search;
        const { data: swapi } = await (0, axios_1.default)(`${config_1.default.SWAPI}/${resource}/${search}`);
        if (format !== undefined) {
            res.send(swapi).status(200);
            return;
        }
        const response = await (0, helperTransforObjectSwapi_1.helperTransforObjectSwapi)(swapi);
        (0, helperResponse_1.helperResponse)(res, response, 200, 'Consulta exitosa');
    }
    catch (error) {
        next(error);
    }
};
exports.getAllResourceSWAPI = getAllResourceSWAPI;
const getResourceSWAPI = async (req, res, next) => {
    try {
        const { resource, id } = req.params;
        const urlParse = url_1.default.parse(req.url);
        const search = urlParse.search === null ? '' : urlParse.search;
        const { data: swapi } = await (0, axios_1.default)(`${config_1.default.SWAPI}/${resource}/${id}/${search}`);
        const response = await (0, helperTransforObjectSwapi_1.helperTransforObjectSwapi)(swapi);
        (0, helperResponse_1.helperResponse)(res, response, 200, 'Consulta exitosa');
    }
    catch (error) {
        next(error);
    }
};
exports.getResourceSWAPI = getResourceSWAPI;
