import * as z from 'zod';

const playerSchema = z.object({
    nome: z.string(),
    numero: z.number(),
    posicao: z.string(),
    idade: z.number(),
    altura: z.number(),
    id: z.number().optional()
});

type IPlayer = z.infer<typeof playerSchema>;

export { IPlayer, playerSchema }