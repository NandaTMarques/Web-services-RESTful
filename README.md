# Web-services-RESTful

## Boas vindas ao repositório do projeto Web Service!

Olá, eu sou a Fernanda, esse projeto foi produzido por mim e faz parte do desafio técnico para a vaga de full Stack da Allugator.

## Habilidades

Nesse projeto, fui capaz de:

- Fazer uma aplicação que consiste em um CRUD no back-end e implementação do front-end para consumir a API;
- Manter a organização do meu código e a arquitetura geral da aplicação (tanto da API quando do front-end);
- Manter aderência ao padrão REST na API;
- Entender o funcionamento da camada de Model, Services e Controlller;
- Delegar responsabilidades específicas para essa camada;
- Conectar a camada da aplicação com bancos de dados;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada parte do meu app;
- Melhorar manutenibilidade e reusabilidade do meu código;
---

# Instruções para utilizar o projeto:

## 🗒 Antes de começar

1. Clone o repositório

   - `git clone https://github.com/NandaTMarques/Web-services-RESTful.git`.
   - Entre na pasta do repositório que você acabou de clonar:
     - `cd Web-services-RESTful`;

2. Entre na pasta backend e digite o seguinte comando no terminal:
     - `npm install`

3. Entre na pasta frontend e digite o seguinte comando no terminal:
     - `npm install`

---

## Setup do Projeto

Foi criado um repositório chamado "backend", onde todas as informações do Back-end estão armazenadas e com os testes implementados. Foi criado ainda um repositório chamado "frontend", onde o Fron-tend está armazenado juntamente com seus testes.

O Front-end foi construido em React, foi utilizado componente funcional e foi testado através de RTL. Foi utilizado o react-router-dom e o projeto esta todo componentizado. Além disso, estilizei o projeto com o bootstrap.

O Back-end foi construido utilizando o framework Express na construção de APIs com Node, com arquitetura RESTful. O banco de dados foi convertido em JSON, foi utilizado o mongoDB como banco de dados. Os testes foram criados utilizando o frisby. E a porta utilizada foi a 3001, para evitar conflitos com o front-end que roda na porta 3000.

## Como utilizar a aplicação

Para a aplicação funcionar é necessário entrar na pasta "backend" e no terminal utilizar o comando "npm start" ou "npm run dev", assim o back-end estará on-line.

Na pasta "frontend" execute o comando "npm start" e a aplicação funcionará no seu navegador.

Inicialmente tem uma tela com bontões que te levam às páginas de criar funcionários e buscar funcionários, na pasta buscar funcionário tem a opção deletar o funcionário também.

## Testes

Para executar os testes localmente, você pode rodar o comando `npm test`.

Caso prefira testar um requisito por vez pode executar o teste da seguinte forma: `npm test tests/addEmployees` (nesse caso testa apenas o requisito addEmployees.test)

---

## Melhoras a fazer

A aplicação poderia ficar ainda melhor (não pretendo parar por aqui):

- Documentação da API através do Swagger;
- Criar validações para o frontend;
- criar a combinação de filtragens de funcionários, utilizando mais de uma filtragem por vez, ou uma após a outra;
- aumentar a abrangencia dos testes, tando no backend, quanto no frontend;
- criar uma tela de login e fazer a autenticação com JWT, para somente quem tem autorização possa excluir e criar funcionários.

