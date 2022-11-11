"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStarShip = exports.getStarShip = exports.getStarShips = exports.createStarShips = void 0;
const helperResponse_1 = require("../../utils/helperResponse");
const models = __importStar(require("./modelsStarShips"));
const createStarShips = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await models.modelCreateStarShips(data);
        (0, helperResponse_1.helperResponse)(res, response, 200, 'Nave stelar creada con exito');
    }
    catch (error) {
        next(error);
    }
};
exports.createStarShips = createStarShips;
const getStarShips = async (_req, res, next) => {
    try {
        const response = await models.modelgetStarShips();
        (0, helperResponse_1.helperResponse)(res, response, 200, 'Consulta exitosa');
    }
    catch (error) {
        next(error);
    }
};
exports.getStarShips = getStarShips;
const getStarShip = async (req, res, next) => {
    try {
        const { id } = req.body;
        const response = await models.modelGetStarShip(id);
        (0, helperResponse_1.helperResponse)(res, response, 200, 'Consulta exitosa');
    }
    catch (error) {
        next(error);
    }
};
exports.getStarShip = getStarShip;
const deleteStarShip = async (req, res, next) => {
    try {
        const { id } = req.body;
        await models.modelDeletStarShip(id);
        (0, helperResponse_1.helperResponse)(res, [], 200, 'Nave Estelar eliminada con exito');
    }
    catch (error) {
        next(error);
    }
};
exports.deleteStarShip = deleteStarShip;
