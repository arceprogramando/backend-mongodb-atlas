import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});

const {
  NODE_ENV,
  PORT,
  API_VERSION,
  ORIGIN,
  DB_CNN,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
} = process.env;

const configObject = {
  NODE_ENV,
  PORT,
  API_VERSION,
  ORIGIN,
  DB_CNN,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
};

export default configObject;
