# Desafio Técnico Back-end

> Status: Desenvolvido

### Essa é uma API criada para o controle financeiro viabilizando uma viagem entre amigos para Cancun em 01/032023. Na aplicação é possível fazer o CRUD de usuário e deposito.
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
 e se é possível a viagem acontecer ou não com o valor dos juros composto até a data da viagem.

+ Visualizar todo o valor guardado na conta em tempo real no formato BLR
+ Viabilidade da viagem acontecer fazendo os cálculos de juros composto até a data da viagem, se o valor arrecada divido pelo número de participantes for igual a R$ 30.000,00, o retorno vai ser TRUE, caso contrário vai ser FALSE.
+

## Técnologias utilizadas:

+ Javascript
+ Node.js
+ Express
+ PostgresSQL

## Comoi executar o aplicativo:
+ No dbeaver, crie um usuário ```postgres```, senha ```123mudar``` e um banco ```postgres```
+ Intale as dependecias do projeto com npm install
+ inicie o projeto com npm start
