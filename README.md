# API de Capitais

Projeto back-end em TypeScript para consultar a capital de um estado brasileiro pela sigla (UF).

## Requisitos

- Node.js e npm instalados
- Visual Studio Code (opcional)
- Conexão com a internet para instalar dependências

Confira as instalações:

```bash
node --version
npm --version
```

## Preparar e executar

Na pasta do projeto, instale as dependências e compile:

```bash
npm install
npm run build
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

Consulte uma capital, por exemplo:

```text
http://localhost:3000/capital?uf=SP
```

Resposta:

```json
{"uf":"SP","capital":"São Paulo"}
```

## Estrutura principal

- `src/`: código TypeScript da aplicação.
- `dist/`: arquivos JavaScript gerados pela compilação.
- `package.json`: scripts e dependências do projeto.
- `package-lock.json`: versões exatas das dependências instaladas pelo npm.
- `tsconfig.json`: configurações de análise e compilação do TypeScript.
- `node_modules/`: bibliotecas instaladas pelo npm; não edite manualmente.

## Comandos úteis

- `npm run build`: compila o TypeScript para `dist/`.
- `npm start`: inicia a versão compilada da API.
- `npm ls --depth=0`: lista as dependências instaladas.
- `npx tsc --version`: mostra a versão do TypeScript.

Este projeto usa o módulo HTTP nativo do Node.js para atender às requisições. O tutorial em `Docs/02-preparacao-do-ambiente-V0006.md` também apresenta Express como tecnologia para o projeto de Cadastro de Produtos.
