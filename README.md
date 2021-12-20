# Serverless Challenge

Para realizar o desafio, foi utilizado o terraform para a integração da lambda, api-gateway, e dynamoDB.

## Environments

No registro terraform/variables.tf é importante incluir sua região de uso e sua "account id" da AWS.

Para saber seu ID, veja em: https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/console_account-alias.html

## Run the app

Com o intuito de fornecer os meios fundamentais na utilização deste app, use os seguintes comandos no diretório /terraform:

Para validar os arquivos de configuração:
`terraform validate`

Cria um plano de execução, e permite visualizar mudanças:
`terraform plan`

E parar executar as ações propostas em um plano do Terraform:
`terraform apply -auto-approve`
A flag "-auto-approve" executa direto, sem precisar aprovar nenhuma solicitação

## API

A api está disponível por requisições `HTTP GET, POST, PUT e DELETE` pelo endpoint: `/in/employees`

Você é capaz de executar uma versão publica através de GET: `https://bzbiyj4t5m.execute-api.sa-east-1.amazonaws.com/in/employees`

## Testando com o Insomnia

Utilize dessa forma para testar as requests no insomnia

### 1. POST - Create Employee

```
   {
       "id": 2,
       "idade": "24",
       "nome": "Fulando De Tal",
       "cargo": "Developer"
   }
```

### 3. PUT - Update Employee (with id)

```
   {
       "id": 2,
       "idade": "25",
       "nome": "Novo nome de Fulando De Tal",
       "cargo": "Novo cargo de Developer"
   }
```

### 4. DELETE - Delete Employee

```
   {
       "id": 2
   }
```

### Por fim, execute o comando abaixo para deletar todas os recursos adicionados na AWS

`terraform destroy -auto-approve`
