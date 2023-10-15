"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = __importDefault(require("../controllers/gameController"));
class GameRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', gameController_1.default.index);
        this.router.post('/', gameController_1.default.create);
        this.router.delete('/:id', gameController_1.default.delete);
    }
}
const gamesRoutes = new GameRoutes();
exports.default = gamesRoutes.router;
