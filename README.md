# Serverless Challenge

Para realizar o desafio, foi utilizado o terraform para a integração da lambda, api-gateway, e dynamoDB.

## Environments

No registro terraform/variables.tf  é importante incluir sua região de uso e sua "account id" da AWS.

É necessário também modificar a região no arquivo lambda/employees.js

## Run the app

Com o intuito de fornecer os meios fundamentais na utilização deste app, use o comando no diretório /terraform:

```terraform apply -auto-approve```

## Utilização da api

A api está disponível por requisições `HTTP GET, POST, PUT e DELETE` pelo endpoint: `/in/employees` 

Você é capaz de executar uma versão publica através de GET: `https://bzbiyj4t5m.execute-api.sa-east-1.amazonaws.com/in/employees`


## Por fim, execute o comando abaixo para deletar todas os recursos adicionados na AWS

``` terraform destroy -auto-approve ```