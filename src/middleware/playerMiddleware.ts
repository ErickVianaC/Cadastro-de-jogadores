import { Request, Response, NextFunction } from 'express';
import { playerRepository } from "../repositories/playersRepository";
import { StatusCodes } from 'http-status-codes';
import { playerSchema } from '../controllers/interfaces/IPlayer';
import * as z from 'zod';
import { handleZodError } from './errorMiddleware';

class PlayerMiddleware {
    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        const allPlayers = await (await playerRepository.find()).pop()
        if (!allPlayers) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Nenhum Jogador no banco de dados" })
        }
        next()
    }

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            playerSchema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                handleZodError(error, res);
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        }
        // try {
        //     playerSchema.parse(req.body);
        //     next();
        // } catch (error: any) {
        //     if (error instanceof z.ZodError) {
        //         const issues = error.issues.map((issue) => ({
        //             message: issue.message,
        //             path: issue.path.join("."),
        //         }));
        //         return res.status(400).json({ errors: issues });
        //     }
        //     return res.status(500).json({ error: error.message });
        // }
        // next()


    }

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params
        const player = await playerRepository.findOne({ where: { id: Number(id) } })
        if (!player) {
            return res.status(StatusCodes.NOT_FOUND)
                .json({ message: "Jogador não encontrado" })
        }

        next()
    }
}

export default PlayerMiddleware