import mongoose from 'mongoose';
import configObject from '../config/config.js';

const env = configObject;

const configConnection = {
  url: env.DB_CNN ?? `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

const mongoDBConnection = async () => {
  try {
    // eslint-disable-next-line no-console
    console.log(configConnection.url);
    await mongoose.connect(configConnection.url, configConnection.options);
    // eslint-disable-next-line no-console
    console.log(
      `======= URL: ${configConnection.url.substring(0, 20)} =======`,
    );
  } catch (error) {
  // eslint-disable-next-line no-console
    console.log(`🚀 ~ file: mongo.config.js:23 ~ mongoDBConnection ~ err:, ${error}`);
  }
};

export default mongoDBConnection;
