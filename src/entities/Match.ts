import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('matches')
export class Matches {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    home_team: string

    @Column()
    home_team_goals: number

    @Column({ type: 'text' })
    away_team: string

    @Column()
    away_team_goals: number

}