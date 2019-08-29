import { Pool } from 'pg';

class SampleService {
  get() {
    return Promise.resolve({"response": "hello world"});
    // const pool = new Pool();
    // return pool.query('SELECT NOW()', (err, res) => {
    //   console.log(err, res);
    //   pool.end();
    //   return {
    //     "response": "Hello World"
    //   };
    // });
  }
}

export default new SampleService();
