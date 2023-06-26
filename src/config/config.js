import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const {
  API_VERSION,
  NODE_ENV,
  PORT,
  ORIGIN,
  DB_CNN,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
} = process.env;

const configObject = {
  API_VERSION,
  NODE_ENV,
  PORT,
  ORIGIN,
  DB_CNN,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
};

export default configObject;
