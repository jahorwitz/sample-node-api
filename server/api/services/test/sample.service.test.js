import SampleService from '../sample.service';
import assert from 'assert';

describe('Sample Service', function () {
  describe('#get()', function () {

    it('should return a response', async function () {
      const expected = {
        "response": "hello world"
      };

      const response = await SampleService.get();

      assert.deepEqual(response, expected);
    });
  });
});