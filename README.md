# NLW Pocket Server

Este é o backend do projeto NLW Pocket, desenvolvido durante o evento Next Level Week da Rocketseat.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Drizzle ORM
- Docker
- Fastify

## Configuração do Ambiente

1. Clone o repositório:

   ```bash
    git clone <https://github.com/ericrocha97/nlw-pocket-server.git>
    cd nlw-pocket-server
    ```

2. Crie um arquivo ``.env`` com base no arquivo ``.env.example`` e configure as variáveis de ambiente necessárias.
3. Instale as dependências:

   ```bash
    npm install
    ```

## Rodando o Servidor

1. Execute o comando abaixo para iniciar o servidor usando Docker:

   ```bash
    docker-compose up
    ```

2. Rode as migrações do banco de dados:

   ```bash
    npx drizzle-kit migrate
    ```

3. Inicie o servidor:

   ```bash
    npm run dev
    ```

## Scripts Disponíveis

- ``npm run dev``: Inicia o servidor em modo de desenvolvimento.
- ``npm run seed``: Executa os scripts de seed no banco de dados.

## Estrutura do Projeto

- ``src/``: Contém o código fonte do servidor.
- ``.migrations/``: Armazena os arquivos de migração do banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença ISC.
