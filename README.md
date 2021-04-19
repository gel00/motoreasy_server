# motoreasy_server

I did this as part of a tech test for Motoreasy. The task consisted of three parts; a one to many relational mongo database, a nodejs based rest api and a react client to query and filter the database for tyres.

I used the following npm packages:
  - cypress
  - cors
  - mongoose
  - dotenv (--dev)

The secret key for the database must be stored in an .env file in the root directory in the following format:
MONGO_ATLAS_PW = YOUR_PASSWORD
