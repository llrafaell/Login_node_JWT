# Criado uma aplicação REST com autenticação em JWT usando: Node, express, TypeoRM, postgres


## Porque TypeORM?

O TypeORM é um módulo avançado de gerenciamento de relações de objeto que é executado no Node.js. Como o nome indica, o TypeORM deve ser usado com o TypeScript. Neste artigo, aprenderemos a usar o TypeORM para configurar objetos Entity para armazenar dados em um banco de dados, como usar uma instância CustomRepository para manipular uma tabela de banco de dados e usar Relações entre instâncias de Entidade para simular junções de banco de dados.

É compativel com MySQL / MariaDB / Postgres / SQLite / Microsoft SQL Server / Oracle / sql.js / MongoDB. Você pode alterar de db sem precisar reescrever o código.

Nesse projeto usaremos Postgres, mas você pode altera para qualquer outro.


## Vamos Começar

TypeORM tem seu próprio CLI tool que cria um projeto com o minimo necessário, para usar isso prescisamos apenas:

    npm install -g typeorm

Agora iniciar nossa aplicação:

    typeorm init --name jwt-typeorm --database postgres --express

Ele criará um exemplo de aplicativo expresso já no TypeScript com TypeORM e body-parser. Vamos instalar essas dependências comh:

    npm install

Agora, vamos instalar algumas dependências adicionais

    npm install -s helmet cors jsonwebtoken bcryptjs class-validator ts-node-dev

Depois disso, teremos as seguintes dependências

**helmet**
Ajude-nos a proteger nosso aplicativo definindo vários cabeçalhos HTTP

**cors**
Habilita o cross-origin Requests

**body-parser**
Analisa a solicitação do cliente de json em objetos javascript

**jsonwebtoken**
Cuidará das operações jwt para nós

**bcryptjs**
Ajude-nos a criar senhas de usuário hash

**typeorm**
O ORM que vamos usar para manipular o banco de dados

**reflect-metadata**
permite alguns recursos de anotações usados ​​com o TypeORM

**class-validator** 
Um pacote de validação que funciona muito bem com o TypeORM

**postgres** 
Vamos usar o postgres como banco de dados

**ts-node-dev**
Reinicia automaticamente o servidor quando alteramos qualquer arquivo



### Instalando Dependências de Verificação de Tipo

Como estamos trabalhando com o TypeScript, é uma boa ideia instalar o @types para nossas dependências.

    npm install -s @types/bcryptjs @types/body-parser @types/cors @types/helmet @types/jsonwebtoken

Depois disso, você poderá usar o preenchimento automático e a verificação de tipo mesmo com os pacotes JavaScript.


## Scripts de desenvolvimento e produção

![](https://cdn-images-1.medium.com/max/2428/1*l5Eb6PGvHR0AB2XZsdCLBg.png)

O Node.js em si não pode executar, nativamente, arquivos .ts. Por esse motivo, é importante conhecer as seguintes ferramentas.
"tsc" — create a /build folder and converts all your .ts to .jsfiles.
"ts-node" — allows node to run .ts projects. Not recommended for production uses.
"ts-node-dev" — same as above, but allows you restart the node server every time you change a file


Por fim, adicionamos uma última linha chamada migration: run. Alguns usuários do Windows recebem um erro ao tentar executar migrações TypeORM a partir do npm. A execução direta da pasta de módulos do nó resolve o problema.

## E o primeiro usuário?

Como você pode ver, mesmo para criar um novo usuário, precisamos ter um ADMIN. Este primeiro usuário será criado por um processo de migração. As migrações também são muito importantes para manter seu banco de dados de produção. Se você for usar o TypeORM em produção, recomendo a leitura da documentação de migração:

Agora, vamos criar nossa primeira migração

    typeorm migration:create -n CreateAdminUser

Então, vamos modificar o arquivo gerado:

Agora, iniciamos o servidor, para que a ferramenta de sincronização possa gerar nossas tabelas de banco de dados.

    npm start

Agora podemos executar a migração, para inserir o primeiro usuário administrador.

    npm run migration:run

Finalmente, seu servidor está pronto para ser usado. Basta pegar o Postman ou qualquer outra ferramenta e fazer alguns pedidos.

The final repository can be found on GitHub:
[**andregardi/jwt-express-typeorm**
*Rest API with JWT authentication and role based authorization using TypeScript Express.js and TypeORM …*github.com](https://github.com/andregardi/jwt-express-typeorm)
