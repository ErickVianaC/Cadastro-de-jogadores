# Cadastro de Time de Futebol Society

Este projeto é um sistema de cadastro de jogadores e partidas de um time de futebol society.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MySQL
- TypeORM
- Zod

## Funcionalidades

- Cadastro de jogadores
- Edição de jogadores
- Remoção de jogadores
- Listagem de jogadores
- Cadastro de partidas
- Edição de partidas
- Remoção de partidas
- Listagem de partidas

## Como Usar

### Pré-requisitos

- Node.js (v14 ou superior)
- MySQL Server (v8 ou superior)

### Instalação

1. Faça o clone deste repositório: `git clone https://github.com/ErickVianaC/Cadastro-de-jogadores`
2. Acesse a pasta do projeto: `cd cadastro-de-jogadores`
3. Instale as dependências: `npm install`

### Configuração do Banco de Dados

1. Crie um banco de dados no MySQL com o nome `cadastro_futebol`
2. Configure as variáveis de ambiente no arquivo `.env`, conforme o exemplo:

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=cadastro_futebo


### Execução

- Execute o projeto em modo de desenvolvimento: `npm run dev`
- Para parar o servidor, execute: `npm run stop`

## Testes

- Em breve serão adicionados testes para o projeto.

## Frontend

- O projeto ainda está em desenvolvimento e terá um frontend para integrá-lo. Fique atento para atualizações!

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para obter mais detalhes.
