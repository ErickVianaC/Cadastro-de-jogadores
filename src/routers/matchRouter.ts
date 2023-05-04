import { Router } from "express"
import MatchesController from "../controllers/MatchesController"

const matchRouter = Router()

matchRouter.post('/', new MatchesController().create)



export default matchRouter