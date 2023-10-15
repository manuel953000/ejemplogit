"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GameController {
    index(req, res) {
        database_1.default.query('DESCRIBE games');
        res.send("hola ruta controlado Game");
    }
    create(req, res) {
        res.json({ text: 'CREATING GAME' });
    }
    delete(req, res) {
        res.json({ text: 'deleting game' });
    }
}
;
const gameController = new GameController();
exports.default = gameController;
