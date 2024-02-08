Olá meu nome é João Pedro, tenho 21 anos e sou desenvolvedor full stack especializado em back-end. Desenvolvi essa API pensando em arquitetura limpa (clean architecture) e estrutura modular, com foco em estabilidade e escalabilidade.

Para rodar esse projeto você precisa:
Instalar o Nodejs versão 18.x.
Instalar o Docker.
Rodar o comando "npm i" para instalar todas as dependencias.
Rodar o comando "docker compose up -d" na pasta raiz da API, esse comando irá criar o container.
Rodar o comando "npm run db:setup" e "npm run db:setup:test" para criar as tabelas e rodas as migrações.
Rodar o comando "npm run db:seed:all" para adicionar dados ficticios (seeds) no seu banco de dados local.
Rodar o comando "npm run test" para rodar os testes automatizados.
Rodar o comando "npm run start" para rodar a aplicação.

Comandos úteis:
"npm run db:drop" e "npm run db:drop:test" dropa o banco de dados
Outros comandos para auxiliar no desenvolvimento da API encontra-se no package.json.


# Ecommerce API

Olá! Meu nome é João Pedro, tenho 21 anos e sou desenvolvedor full stack especializado em back-end. Desenvolvi esta API com foco em arquitetura limpa (clean architecture) e estrutura modular, visando estabilidade e escalabilidade.

## Pré-requisitos

Para executar este projeto, certifique-se de ter instalado:

- Node.js versão 18.x
- Docker

## Configuração

1. Instale as dependências:

```bash
npm i
```

2. Crie o container Docker:

```bash
docker compose up -d
```

3. Execute as migrações do banco de dados:

```bash
npm run db:setup
npm run db:setup:test
```

4. Adicione dados fictícios (seeds) ao banco de dados local:

```bash
npm run db:seed:all
```

## Execução

Para rodar a aplicação:

```bash
npm start
```

## Testes Automatizados

Para executar os testes automatizados:

```bash
npm test
```


## Comandos Úteis

- `npm run db:drop` e `npm run db:drop:test`: excluem o banco de dados
- Outros comandos úteis para auxiliar no desenvolvimento da API estão no arquivo `package.json`.

Lembre-se de corrigir os erros e melhorar a semântica conforme necessário.

