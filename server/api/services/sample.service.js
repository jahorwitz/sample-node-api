import { Pool } from 'pg';
import LOGGER from '../../common/logger';

class SampleService {
  get() {
    // return Promise.resolve({"response": "hello world"});
    const pool = new Pool();
    return pool.query('SELECT NOW()').then((res) => {
      LOGGER.info(`Successfuly retrieved record from database: ${res}`);
      pool.end();
      return {
        "response": "Hello World"
      };
    })
    .catch((err) => {
      LOGGER.error(`Error connecting to database: ${err}`);
      throw err;
    });
  }
}

export default new SampleService();
