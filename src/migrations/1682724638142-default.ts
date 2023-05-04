import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1682724638142 implements MigrationInterface {
    name = 'Default1682724638142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`players\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`posicao\` text NOT NULL, \`numero\` int NOT NULL, \`idade\` int NOT NULL, \`altura\` int NOT NULL, \`gols\` int NULL, \`assistencia\` int NULL, \`imagem\` blob NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`players\``);
    }

}
