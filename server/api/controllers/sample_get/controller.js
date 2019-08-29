import SampleService from '../../services/sample.service';

class SampleController {
  sampleEndpoint(req, res) {
    SampleService
      .get()
      .then((r) => {
        res.json(r)
      });
  }
}

export default new SampleController();
