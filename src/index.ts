import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { jsonErrorHandler } from './middlewares/errors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodejs Express by Emir',
      version: '1.0',
      description: 'A sample Express.js API built with TypeScript, PrismaORM for Postgresql and Swagger',
    },
  },
  apis: ['./src/routes/*.ts'],
};
const swagger = swaggerJsdoc(swaggerOptions);
app.use('/users', userRoutes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger));
app.get('/', (req, res) => {
  res.redirect('/swagger');
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  jsonErrorHandler(err, req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});