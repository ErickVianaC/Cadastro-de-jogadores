import { Request, Response } from "express";
import { matchesRepository } from "../repositories/matchesRepository";


class MatchesController {
    async create(req: Request, res: Response) {
        const match = req.body
        console.log("🚀 ~ match:", match)

        try {
            const newMatch = matchesRepository.create(match)
            console.log("🚀 ~ newPlayer:", newMatch)

            await matchesRepository.save(newMatch)
            return res.status(201).json(newMatch)

        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: error })

        }
    }
}


export default MatchesController