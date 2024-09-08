# verx0624-crud

# Iniciar o app
Para iniciar o projeto copie o arquivo `.env.example` para um arquivo `.env` e rode o comando `docker-compose up`. Assim, o app será iniciado na porta 3003.
Certifique-se que a porta 3003 se encontra livre no seu dispositivo. Caso contrario, você pode alterar a porta que será exposta pelo docker através da variavel `PORT` dentro do arqquivo `.env`

# Requisições
```
GET - /verx-crud/v1/users          - Busca todos os usuarios
GET - /verx-crud/v1/users/:userId  - Busca o usuario pelo id
POST - /verx-crud/v1/users         - Cria um usuario
{
    "password": "Teste@12",
    "name": "gregori",
    "email": "gregori1@email.com",
    "birthday": "2024-09-07T21:27:03.749Z"
}
PATCH - /verx-crud/v1/users/:userId  - Atualiza um usuario
{
    "name": "gregori",
    "birthday": "2024-09-07T21:27:03.749Z"
}
DELETE - /verx-crud/v1/users/:userId  - Deleta um usuario
```
