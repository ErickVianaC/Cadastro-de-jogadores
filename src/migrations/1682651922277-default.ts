import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1682651922277 implements MigrationInterface {
    name = 'Default1682651922277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`matches\` (\`id\` int NOT NULL AUTO_INCREMENT, \`home_team\` text NOT NULL, \`home_team_goals\` int NOT NULL, \`away_team\` text NOT NULL, \`away_team_goals\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`players\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`posicao\` text NOT NULL, \`numero\` int NOT NULL, \`idade\` int NOT NULL, \`altura\` int NOT NULL, \`gols\` int NULL, \`assistencia\` int NULL, \`imagem\` blob NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role\` varchar(255) NOT NULL, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`senha\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`players\``);
        await queryRunner.query(`DROP TABLE \`matches\``);
    }

}
