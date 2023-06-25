import express from 'express';

const app = express();

app.set('port', 8080);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Encendido servidor en puerto ${app.get('port')}`);
});
