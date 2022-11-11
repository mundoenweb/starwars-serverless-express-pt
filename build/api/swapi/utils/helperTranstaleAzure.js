"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperTranstaleAzure = void 0;
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const key = 'c1118423c86c466291be3447abd15b64';
const endpoint = 'https://api.cognitive.microsofttranslator.com';
const location = 'westus2';
const helperTranstaleAzure = async (texts) => {
    const { data } = await (0, axios_1.default)({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
            // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': (0, uuid_1.v4)().toString()
        },
        params: {
            'api-version': '3.0',
            from: 'en',
            to: ['es']
        },
        data: texts,
        responseType: 'json'
    });
    return data;
};
exports.helperTranstaleAzure = helperTranstaleAzure;
