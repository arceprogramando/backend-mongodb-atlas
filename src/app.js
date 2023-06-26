import express from 'express';
import cors from 'cors';
import displayRoutes from 'express-routemap';
import __dirname from './utils.js';
import configObject from './config/config.js';

const app = express();
const env = configObject;

app.use(cors());

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`=Encendido servidor en puerto ${env.PORT}= \n====== http://localhost:${env.PORT}/ =====`);
  // eslint-disable-next-line no-console
  console.log(`==========ENV:${env.NODE_ENV}==========`);
  // eslint-disable-next-line no-console
  console.log('===============^^^^^===============');
  displayRoutes(app);
});

app.get('/', (req, res) => {
  res.send('hola');
});
