"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelDeletStarShip = exports.modelGetStarShip = exports.modelgetStarShips = exports.modelCreateStarShips = void 0;
const connection_1 = __importDefault(require("../../config/connection"));
const helperTransformResponseModel_1 = require("./helper/helperTransformResponseModel");
const table = 'starships';
const modelCreateStarShips = async (data) => {
    return await new Promise((resolve, reject) => {
        const sql = `INSERT INTO ${table} SET ?, created_at = now()`;
        connection_1.default.query(sql, data, (err, result) => {
            if (err !== null)
                return reject(err);
            modelGetStarShip(result.insertId)
                .then(res => resolve(res))
                .catch(() => resolve({ id: result.insertId }));
        });
    });
};
exports.modelCreateStarShips = modelCreateStarShips;
const modelgetStarShips = async () => {
    return await new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${table}`;
        connection_1.default.query(sql, (err, result) => {
            if (err !== null)
                reject(err);
            const response = (0, helperTransformResponseModel_1.helperTransformResponseModel)(result);
            resolve(response);
        });
    });
};
exports.modelgetStarShips = modelgetStarShips;
const modelGetStarShip = async (id) => {
    return await new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${table} WHERE id = ${id}`;
        connection_1.default.query(sql, (err, result) => {
            if (err !== null)
                return reject(err);
            const response = (0, helperTransformResponseModel_1.helperTransformResponseModel)(result);
            resolve(response[0]);
        });
    });
};
exports.modelGetStarShip = modelGetStarShip;
const modelDeletStarShip = async (id) => {
    return await new Promise((resolve, reject) => {
        const sql = `DELETE FROM ${table} WHERE id=${id}`;
        connection_1.default.query(sql, (err, _result) => {
            if (err !== null)
                return reject(err);
            resolve();
        });
    });
};
exports.modelDeletStarShip = modelDeletStarShip;
