# Desafio Técnico Back-end

> Status: Desenvolvido

### Essa é uma API criada para o controle financeiro viabilizando uma viagem entre amigos para Cancun em 01/03/2023. Na aplicação é possível fazer o CRUD de usuário e deposito.
## Alguns campos no modelo finance são:

+ id
+ code
+ value
+ note
+ date
+ person (user_id

## Também tem o user com os campos:

+ id
+ name

## Além do CRUD, também foi adicionado outras funcionalidades:

+ Visualizar todo o valor guardado na conta em tempo real no formato BLR.
+ Viabilidade da viagem acontecer fazendo os cálculos de juros composto até a data da viagem, se o valor arrecada divido pelo número de participantes for igual a R$ 30.000,00, o retorno vai ser TRUE, caso contrário vai ser FALSE.
+ todos os dias são recebidos a taxa de juros em cada operação às 00:00.

## Tecnologias utilizadas:

+ Javascript
+ Node.js
+ Express
+ PostgresSQL

## Como executar o aplicativo:
+ No dbeaver, crie um usuário ```postgres```, senha ```123mudar``` e um banco ```postgres```
+ Instale as dependências do projeto com npm install
+ inicie o projeto com npm start
