import { AppDataSource } from "../data-source";
import { Matches } from "../entities/Match";

export const matchesRepository = AppDataSource.getRepository(Matches)