# Semana Omnistack - 10ª Edição - 13/01 a 17/01

## 13/01

API Geolocalização do chrome, firefox (?)

Protótipos de interface: Sketch

MongoDB

React Native + Express (roteamento?)

Javascript é a única linguagem de programação que os navegadores conseguem entender (historicamente)

### Gerenciador de pacotes:
**Chocolatey** - Gerenciador de pacotes "global", instala ferramentas para a máquina
cinst = choco install 
Selecionar versão: choco install nodejs-lts (long term suport, versão mais suportada)

**NPM** - gerenciador de pacotes para as aplicações, instala as dependências das mesmas (bibliotecas, APIs, etc)

> O **Yarn** é melhor que o NPM (mais rápido)

Extensões do VS Code:
- Material Icon Theme
- Dracula (Eu estou usando a Material Theme)

## 14/01

Tem uns slides no começo do vídeo

API RestFUL - Sem parte visual

Back-end *servindo* informações para o front-end

Comando "code" no powershell : abre um arquivo no VS Code (usar . para indicar o diretorio atual)

### 1º Passo: Criar um package.json

> Usar `yarn init` ou `npm init`

Todo projeto Javascript possui um *package.json*: armazena nome, versão, arquivo principal (index.js), etc

Instalar bibliotecas e APIs pelo package.json

Adicionar dependências pelo yarn (npm)
`yarn add <..>` ou `npm install`

Usando "semantic versioning"

yarn.lock -> espécie de cache para o yarn guardar versões das dependências

### 2º Passo: Instalar o *Express*
`yarn add express`

Instalação de pacotes/dependências é recursiva. Cada pacote tem seu próprio "package.json"

O código em "node_modules" não deve ser alterado!

*Express* -> ROTAS! Ajuda na criação das rotas para os recursos

www.aplicação.com/recurso

### 3º Passo: Desenvolver!

Criar `const express = require('express')` e ir embora... 

Lançar o servidor:
`node index.js (ou outro arquivo)`

Na prática usar `response.json()` ao invés de `respose.send` (manda texto puro)

Monitorar alterações: pacote "nodemon" -> `yarn add nodemon -D`
> O "-D" significa que é uma dependência de desenvolvimento. Essas ficam separadas no package.json. Quando a aplicação for pra produção, essa dependência não ira com ela.

para executar: `yarn nodemon <nome do arquivo>`

Criar atalhos (script) de execução para o Yarn dentro do package.json:
`"scripts": { "dev" : "nodemon index.js"}`

Testar API usando o insomnia.rest ou o postman

### Configuração
Existe um ".yarnrc" no mesmo molde do ".npmrc". Mas, as configurações gerais, como o proxy que precisei usar, são puxadas do .npmrc mesmo com o yarn

Criei dois arquivos de configuração tanto pro git como pro npm por causa do proxy aqui do sicoob

### MongoDB
Usando o MongoDB Atlas, depois tentar com uma instalação local
Senha: cCaAKwdxK4FIgDoa

### Consumindo APIs
Instalar a biblioteca "axios". Ela serve para fazer chamadas para outras APIs
