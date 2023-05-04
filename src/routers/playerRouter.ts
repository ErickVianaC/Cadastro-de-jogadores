import { Router } from "express"
import PlayersController from "../controllers/PlayersController"
import PlayerMiddleware from "../middleware/playerMiddleware"

const playerRouter = Router()

playerRouter.get('/',
    new PlayerMiddleware().getAll,
    new PlayersController().getAll
)

playerRouter.post('/newPlayer',
    new PlayerMiddleware().create,
    new PlayersController().create
)

playerRouter.post('/:id/delete',
    new PlayerMiddleware().delete,
    new PlayersController().remove
)
// playerRouter.post('/:id', new PlayersController().update)


export default playerRouter