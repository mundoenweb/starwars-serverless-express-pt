"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperTransforObjectSwapi = void 0;
const helperTranstaleAzure_1 = require("./helperTranstaleAzure");
const helperGetParamsTranslate = async (objectSwapi) => {
    const keysTranslate = [];
    for (const key in objectSwapi) {
        const keyArr = key.split('_');
        if (keyArr.length > 1) {
            keysTranslate.push({ text: keyArr.join(' ') });
            continue;
        }
        keysTranslate.push({ text: key });
    }
    const translate = await (0, helperTranstaleAzure_1.helperTranstaleAzure)(keysTranslate);
    return translate;
};
const helperTransforObjectSwapi = async (swapi) => {
    const newSwapi = {};
    let data = [];
    const dataTransform = [];
    let keysTranslate;
    if (swapi.results !== undefined) {
        newSwapi.contador = swapi.count;
        newSwapi.siguiente = swapi.next;
        newSwapi.anterior = swapi.previous;
        data = swapi.results;
        keysTranslate = await helperGetParamsTranslate(swapi.results[0]);
    }
    else {
        keysTranslate = await helperGetParamsTranslate(swapi);
        data = [swapi];
    }
    for (const iterator of data) {
        let count = 0;
        const newData = {};
        for (const key in iterator) {
            const element = iterator[key];
            const dataKey = keysTranslate[count].translations[0].text.split(' ').join('_');
            newData[dataKey] = element;
            count++;
        }
        dataTransform.push(newData);
    }
    if (dataTransform.length > 1) {
        newSwapi.results = dataTransform;
        return newSwapi;
    }
    return dataTransform[0];
};
exports.helperTransforObjectSwapi = helperTransforObjectSwapi;
