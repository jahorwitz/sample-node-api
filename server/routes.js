import getJsonData from './api/controllers/json_get/router';

export default function routes(app) {
  app.use('/api/v1/json_get', getJsonData);
}
