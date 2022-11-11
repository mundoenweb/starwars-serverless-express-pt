"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routeSwapi_1 = __importDefault(require("../api/swapi/routeSwapi"));
const routeStarShips_1 = __importDefault(require("../api/starships/routeStarShips"));
const router = express_1.default.Router();
router.use(routeSwapi_1.default);
router.use(routeStarShips_1.default);
exports.default = router;
