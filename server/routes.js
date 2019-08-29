import sampleGet from './api/controllers/sample_get/router';

export default function routes(app) {
  app.use('/api/v1/sample_get', sampleGet);
}
