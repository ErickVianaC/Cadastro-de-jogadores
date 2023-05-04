import { AppDataSource } from "../data-source";
import { Players } from "../entities/Players";

export const playerRepository = AppDataSource.getRepository(Players)