import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    role: string

    @Column({ type: 'text' })
    nome: string

    @Column({ type: 'text' })
    email: string

    @Column()
    senha: number


}