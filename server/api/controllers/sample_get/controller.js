import SampleService from '../../services/sample.service';

class SampleController {
  sampleEndpoint(req, res) {
    SampleService
    .get()
    .then((r) => {
      res.json(r)
    }).catch((err) => {
      res.status(500).send();
    });
  }
}

export default new SampleController();
