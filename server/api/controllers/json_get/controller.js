import JsonService from '../../services/json.service';

class Controller {
  all(req, res) {
    JsonService
      .all()
      .then((r) => {
        res.json(r)
      });
  }

  byZipCode(req, res) {
    JsonService
      .byZipCode(req.params.zipCode)
      .then(r => {
        if (r) res.json(r);
        else res.status(204).end();
      });
  }
}

export default new Controller();
