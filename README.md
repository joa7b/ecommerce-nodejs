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

