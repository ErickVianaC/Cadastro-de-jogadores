import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('players')
export class Players {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    nome: string

    @Column({ type: 'text' })
    posicao: string

    @Column()
    numero: number

    @Column()
    idade: number

    @Column()
    altura: number

    @Column({ nullable: true })
    gols: number

    @Column({ nullable: true })
    assistencia: number

    @Column({ type: 'blob', nullable: true })
    imagem: Buffer

}