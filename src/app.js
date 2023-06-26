import express from 'express';
import cors from 'cors';
import __dirname from './utils.js';

const app = express();

app.use(cors());

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('port', 8080);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Encendido servidor en puerto ${app.get('port')} \n http://localhost:${app.get('port')}/`);
});

app.get('/', (req, res) => {
  res.send('hola');
});
