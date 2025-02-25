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

passar o nome do banco pela url de conexão -> depois da porta e da "/" e antes da "?", vem o nome do banco

Queries pelo MongoDB - operadorés lógicos do Mongo: Procurar por "mongo operators"

### Consumindo APIs
Instalar a biblioteca "axios". Ela serve para fazer chamadas para outras APIs

> No Sicoob: tive que instalar "axios axios-https-proxy-fix" para usar a bibliteca "https-proxy-agent". Tive que criar uma constante tem essa biblioteca:
`const HttpsProxyAgent = require('https-proxy-agent');`

> Tive que criar o seguinte objeto para configuração:
`const axiosDefaultConfig = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    proxy: false,
    httpsAgent: new HttpsProxyAgent('http://leonardo.cunha:Hebreus12@192.168.50.178:80')
};`
> Por fim, modificar a criação do axios para:
`const axios = require('axios').create(axiosDefaultConfig);`

Começar montando a requisição pra depois desenvolver a API

###Dúvidas:
- modules.exports : o que são os "modules"?

### Controler
Costuma ter cinco funções: index (mostra uma lista das entidades), show (mostra uma entidade), store, update, destroy

Geralmente trabalhar com **um** index por controller

Existe um limite de métodos por controller

### Exercício
Criar os outros métodos:
update Dev
	nome, bio, avatar, localização, techs
destroy Dev

## 15/01

Abordagem tradicional vs Abordagem SPA

React cria os htmls no lado do cliente.

Na abordagem de SPA, apenas dados são retornados pelo servidor; as requisições trazem apenas dados. O Backend não tem responsabilidade pela apresentação dos dados.

### Criando o projeto React

Usando o YARN:
`yarn cerate react-app <nome do projeto>`

Usando NPM:
`npx create-react-app <nome do projeto>`
	Obs: npm: gerencia pacotes mas não executa nenhum
		 npx: ferramenta para executar pacotes

Instalou:
	react, react-dom, react-scripts with cra-template (São dependências do React);

Mensagem final:

	Inside that directory, you can run several commands:

	  yarn start
	    Starts the development server.

	  yarn build
	    Bundles the app into static files for production.

	  yarn test
	    Starts the test runner.

	  yarn eject
	    Removes this tool and copies build dependencies, configuration files
	    and scripts into the app directory. If you do this, you can’t go back!

Estrutura bem parecida... pasta "node_modules", etc.

NUNCA mexer no "yarn.lock"

Html e css ficarão no lado do React

pasta public: arquivos que precisam ficar de forma pública na aplicação
	index.html -> primeiro arquivo que será aberto pela aplicação, tudo parte dele
	conceito PWA : progressive web apps (tem post no blog da rocketseat)
	robot.txt: dizer para o Google quais páginas da aplicação são rastreáveis, ou seja, indexáveis

React, Angular, Vue: Nãos e escreve HTML, tudo é gerado pelo JavaScript

Pelo que entendi, o **index.js não deve ser mudado** também

Para aprender do zero: deletados vários arquivos da pasta src, deixando apenas o Aoo.js e o index.js
Estado básico do index.js:
`
import React from 'react'; // Sempre existe
import ReactDOM from 'react-dom'; // Varia de acordo com o ambiente
import App from './App'; // Arquivo criado no próprio projeto
ReactDOM.render(<App />, document.getElementById('root'));
`

React: sintaxe de impotação diferente do Node.js versão abaixo da 13 (a lts está na 11)

Mais anotações no index.js

### Conceitos principais do React:
- Componente - função que retorna html ou css, etc; primeira letra sempre maiúscula; cada componente também vira uma tag
	uma regra do React: cada arquivo deve ter apenas um componente
    Um bloco isolado de html, css e JS o qual não interfere no restante da aplicação
- Estado
- Propriedade

Um componente não pode retornar várias tags "soltas", é necessário um container (div, por exemplo) para que seja apenas um elemento retornado, imagino...

O react não fica monitorando alterações dentro de variáveis para fazer a visualização do componente -> necessário usar o conceito de ESTADO

O react usa um conceito de imutabilidade -> um dado nunca será alterado; deve-se criar um novo dado a partir do valor anterior

DESESTRUTURAÇÃO -> recurso do JS

Extensão do chrome: React Dev Tools

### Marcas de Tempo
> Até **42:00** é uma introdução de como criar o projeto e dos conceitos do React. A partir dessa marca começa a criação do app em si.

### Construção de apps
Começar da parte visual para depois acrescentar a parte funcional

### Tags
<aside>: fazer sidebar

### Fonte:
Roboto da Google

###Atributos
####Os nomes precisam mudar por causa das palavras reservadas do JS
class passa a ser className
for passa a ser htmlFor

### Bonus: responsividade
a partir de 1:06:00 : abrir o inspecionar elemento e ir diminuindo a tela. Observar a largura em pixels no topo da tela e fazer as alterações

usando "media query" ( @media(condição) )


Função de localização: disponível em todo browser
precisa ser executada uma única vez por exibição em tela
todo código do componente precisa estar dentro do componente para que, caso o mesmo deixe de existir e depois volte a existir, todo o código esteja presente; se um corpo de código for colocado fora do componente, esse corpo de código só será executado uma única vez durante todo o **ciclo de vida** da aplicação.

### comunicando com o Backend
Necessário fazer um ajuste pois o node, por padrão, bloqueia acessos externos à API. Como a API tá no localhost:3333, e a aplicação web no localhost:3000, o node bloqueia isso.. É necessário instalar a extensão **cors** (cross origin resourse sharing)

cada elemento gerado na iteração deve ter um atributo "key" que seja único

### Conceitos para a separação dos arquivos:
Contextos dentro do React: transição de propriedades entre componentes pai e filho sem precisar ficar usando propriedades

### Exercício:
Adicionar possibilidade de alterar e deletar usuário

## 16/01

O React Native implementa dentro da aplicação (iOs ou Android) o **JavascriptCore** > Framework que dá o entendimento da linguagem JavaScript pro sistema operacional mobile. O iOs e o Android passam a conseguir interpretar código JS para a *construção e manipulação da interface*.

iOS -> formato .ipa (Android Studio)
Android -> formato .apk (Xcode)

O Expo é um framework para o React native - conjunto de bibliotecas prontas pra usar a grande maioria das funcionalidades do celular - evita instalar o Android SDK e o iOS SDK.

http://docs.rocketseat.dev -> guia para ambiente do React Native sem o Expo

Expo -> https://blog.rocketseat.com.br/expo-react-native/

yarn global add expo-cli

"yarn global path" -> configuração que talvez precise ser feita em SO não Windows (para instalação de pacotes globais)

Referência: https://blog.rocketseat.com.br/3-passos-para-aprender-react-native/

### Proxy
Tive que criar as variáveis de ambiente HTTP_PROXY e HTTPS_PROXY e adicionar os proxies no yarn config
`yarn config set https-proxy=...`
`yarn config set proxy=...`

baixar app expo no celular

Problemas comuns com o Expo: https://github.com/Rocketseat/expo-common-issues

### Iniciar projeto com expo:
`expo init <nome>`

Tutorial para usar um emulador com o Expo: Youtube da RocketSeat - um pouco mais pesado para a máquina

Poucas diferenças entre o React e o React Native

O React Native **não** tem **TAGS SEMÂNTICAS** e as TAGS não têm estilização própria

Não tem Class e id nas tags, deve-se usar um atributo "style" que recebe uma variável (json) contendo a estilização daquele elemento específico (todos os elementos Native aceitam esse atributo). Usa a variável Stylesheet do ReactNative

"<View>" equivale a uma "<div>"

As propriedades de estilo (css) são representadas por um objeto JavaScript, logo não pode haver palavras separadas por "-"

Não há herança de estilização no React Native. Cada elemento deve possuir sua própria estilização

### estutura de pacotes:

package.json, com dependências, dependências de desenvolvimento e scripts

É possível construir aplicações WEB com a sintaxe do React Native (WPA)

pasta assets> tem ícones e splash screen (tela antes de iniciar) (verificar tamanho da imagem nocanto inferior direito da tela caso queira substituir)

### Babel
Converte o JS das versões mais recentes para as versões que serão entendidas pelos dispositivos ou browsers, pois eles não entendem completamente as versões mais modernas da linguagem

### Desenvolvimento da aplicação em si
#### a partir de 31:00

no App.js, não dá pra ter componentes um debaixo do outro sem um container: usar **"fragments" (<> </>)**

Vai ser necessário instalar uma ferramenta de **navegação**... Entrar em docs.expo.io (33:27) (Procurando por "Routing and navigation")

As **ROTAS** no React Native (React Navigation) são diferentes da do Node (express)

Site do Expo > Managed Workflow > Routing and Navigation

A ferramenta é o React Navigation (https://reactnavigation.org/docs/en/getting-started.html) 

Instalada via `yarn add react-navigation` e também é necessário instalar outras dependências. Ver site acima.

Explicação das bibliotecas: `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context`
> react-native-gesture-handler: usar gestos
> react-native-reanimated: animações
> react-native-screens: gerenciar telas/rotas
> react-native-safe-area-context: onde preencher a tela

"Hello react navigation" -> o restante do tutorial (https://reactnavigation.org/docs/en/getting-started.html) não precisa ser seguido porque estamos usando o EXPO

Vários tipos de navegação > vamos usar a navegação por pilhas (react-navigation-stack)

Navegação por pilha > normalmente por botões, ação do usuário

Navegação por abas

Navegação via drawer > puxar menus da esquerda pra direita - "menu de hamburguer"

### Reload MANUAL
Opções de menu do EXPO: 
- Ctrl+M no Android
- cmd+D no Mac 
- Balançar no celular

Reload Rápido no emulador:
- Mac: cmd+r
- Android: r+r

**React Native não tem HERANÇA de ESTILOS**

Se usa { } no import quando queremos algum componente específico. Caso queiramos a "exportação padrão" (export default), não é necessário usar chaves.

**JSX**: Javascript dentro do HTML, usar {} no html dentro do React

Lembrando: no React Native as estilizações são feitas por Objetos!

Carregar a localização... aprox 48:00

Do React: Para executar algo uma única vez, usar "useEffect"

### Adicionando marcadores
Importar Marker da 'react-native-maps'

A partir de 56:00