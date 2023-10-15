import { Request, Response} from 'express';

import pool from '../database';


class GameController {
    public index (req: Request, res: Response ) {
        pool.query('DESCRIBE games');
        res.send("hola ruta controlado Game");
    }

    public create (req: Request, res: Response){
        res.json({text: 'CREATING GAME'});
    }

    public delete (req: Request, res:Response){
        res.json({text: 'deleting game'})
    }
};


const gameController = new GameController();

export default gameController;