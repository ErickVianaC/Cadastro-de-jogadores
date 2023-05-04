import * as z from 'zod';

const matchSchema = z.object({
    home_team: z.string(),
    home_team_goals: z.number(),
    away_team: z.string(),
    away_team_goals: z.number(),
});

type IMatch = z.infer<typeof matchSchema>;

export { IMatch as IPlayer, matchSchema as playerSchema }