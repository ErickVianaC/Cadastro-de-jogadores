import { Request, Response } from "express";
import { playerRepository } from "../repositories/playersRepository";
import { StatusCodes } from "http-status-codes";


class PlayersController {

    public getAll = async (req: Request, res: Response) => {
        const allPlayers = await playerRepository.find()
        return res.status(StatusCodes.ACCEPTED).json(allPlayers)
    }

    public create = async (req: Request, res: Response) => {
        const player = req.body
        try {
            const newPlayer = playerRepository.create(player)
            await playerRepository.save(newPlayer)
            return res.status(201).json(newPlayer)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: error })
        }

    }

    public remove = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const player = await playerRepository.findOne({ where: { id: Number(id) } })
            await playerRepository.delete(id);
            return res.status(StatusCodes.OK)
                .json({ message: `${player?.nome} foi excluido do banco de dados ` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: error });
        }
    }

    // public update = async (req: Request, res: Response) => {
    //     const { id } = req.params

    //     try {
    //         await playerRepository.findOne();
    //         return res.status(204).send(`Player de id: ${id} foi removido`);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ mensagem: error });
    //     }
    // }


}

export default PlayersController