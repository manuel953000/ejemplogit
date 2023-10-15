import {Router} from 'express';

import gameController from '../controllers/gameController'

class GameRoutes {
    
    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', gameController.index);
        this.router.post('/', gameController.create);
        this.router.delete('/:id', gameController.delete)
    }

}

const gamesRoutes = new GameRoutes();
export default gamesRoutes.router;