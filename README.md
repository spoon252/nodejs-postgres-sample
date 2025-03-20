# Project Name

Nodejs API demo with PrismaORM for Postgresql.
SwaggerUI is used for easier API tests.

### Prerequisites

- Node.js (version 18 or above)
- Docker (for Postgresql installation)

### Installation

After cloning the repo, run

```
npm install
```

This installs the needed packages.
Next is installation of Postgresql and running it in a Docker container
```
docker-compose up -d
```
Now the database is running, and a first migration can be started to initialize the tables
```
npm run migrate
```
Next step is to build and start the project 
```
npm run dev
```

Now the server is running and API can be tested with SwaggerUI on http://localhost:3000/swagger

Otherwise, API can be tested with Postman using these endpoints:
- http://localhost:3000/users/create to create a single user
- http://localhost:3000/users to return all users