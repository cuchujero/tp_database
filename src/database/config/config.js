const {
  TEST_DB_USERNAME,
  TEST_DB_PASSWORD,
  TEST_DB_DATABASE,
  TEST_DB_HOST,
  TEST_DB_DIALECT,
  TEST_DB_PORT,
  PRODUCTION_DB_USERNAME,
  PRODUCTION_DB_PASSWORD,
  PRODUCTION_DB_DATABASE,
  PRODUCTION_DB_HOST,
  PRODUCTION_DB_DIALECT,
  PRODUCTION_DB_PORT
} 
= require('../../processValues');

module.exports = {
  "test": {
    "username": TEST_DB_USERNAME,
    "password": TEST_DB_PASSWORD,
    "database": TEST_DB_DATABASE,
    "host": TEST_DB_HOST,
    "dialect": TEST_DB_DIALECT,
    "port": TEST_DB_PORT
  },
  "production": {
    "username": PRODUCTION_DB_USERNAME,
    "password": PRODUCTION_DB_PASSWORD,
    "database": PRODUCTION_DB_DATABASE,
    "host": PRODUCTION_DB_HOST,
    "dialect": PRODUCTION_DB_DIALECT,
    "port": PRODUCTION_DB_PORT
  }
}


