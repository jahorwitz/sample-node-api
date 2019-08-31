import { Pool } from 'pg';
import LOGGER from '../../common/logger';

class SampleService {

  getPgPool() {
    return new Pool();
  }

  get() {
    // return Promise.resolve({"response": "hello world"});
    const pool = this.getPgPool();
    return pool.query('SELECT * FROM consumers').then((res) => {
      LOGGER.info(`Successfuly retrieved record from database. Closing Pool.`);
      pool.end();
      return res.rows;
    })
    .catch((err) => {
      LOGGER.error(`Error connecting to database: ${err}`);
      throw err;
    });
  }
}

export default new SampleService();
