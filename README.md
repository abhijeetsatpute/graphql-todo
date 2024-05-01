# graphql-todo

## Installation

To get started, install the project dependencies by running the following command:

```bash
npm install
```

## Create .env

create .env file &
Refer the [.env.sample]("./.env.example) file to provide MONGO_URI

## Run a Local Standalone Apollo server

```bash
git checkout standalone-server
npm run start:dev
```

## Invoke serverless handler

mock HTTP requests locally by
providing the query in [query.json](./query.json)

```bash
git checkout main
serverless invoke local -f graphql -p query.json
```

## Deploy

- Provide your cloud config in [serverless.yml](./serverless.yml)
- serverless will have the access of your aws cli by default
- the below command packages our app, upload the arificats, provisons the resources & config the resources & deploy functions & endpoint which will return us with a API Gateway endpoint

```bash
serverless deploy
```
