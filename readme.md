# Aplicação de Demonstração Cypress Heroes

Esta é uma aplicação de demonstração que mostra como usar o Cypress para executar testes end-to-end (E2E), de componentes e de API em uma aplicação.

## Primeiros Passos

A aplicação é um monorepo que usa npm workspaces. Depois de clonar o projeto, instale as dependências na pasta raiz:

```sh
npm install
```

Depois disso, algumas outras coisas precisam ser configuradas (bancos de dados e similares). Para isso, execute:

```sh
npm run setup
```

Para iniciar a aplicação em modo de desenvolvimento, execute:

```sh
npm run dev
```

Isso iniciará tanto o cliente quanto o servidor em modo dev. O site ficará disponível em http://localhost:3000.

## Visão Geral da Aplicação

A aplicação Cypress Heroes consiste em um app cliente frontend escrito em React que usa Vite, além de um app backend que usa NestJS.

### React Client App

A aplicação cliente React está localizada na pasta client. Ela é uma aplicação React padrão usando [Vite](https://vitejs.dev/) app.

Todo: detalhar mais

### NestJS Server App

A aplicação servidor fica na pasta **server**. Ela é construída com o framework [NestJS](https://nestjs.com/) Node.js. Ela utiliza o [Prisma](https://www.prisma.io/) como ORM de banco de dados.

#### Seed do banco de dados e reset

O banco de dados é populado (seed) pelo script **server/prisma/seed.ts** quando você configura a aplicação. Se em algum momento você quiser redefinir o banco para o estado inicial, execute:

```sh
npm run resetdb
```

## Variáveis de Ambiente

A aplicação cliente usa uma variável de ambiente para saber qual é a URL da API do backend chamada `VITE_API_URL`. O padrão é "http://localhost:3001" para uso em modo de desenvolvimento, e deve ser sobrescrito em outros ambientes/modos.
