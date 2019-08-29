import controller from '../controller';
import SampleService from '../../../services/sample.service';
import assert from 'assert';
import sinon from 'sinon';

describe('Sample Controller', function() {
  describe('#sampleEndpoint()', function() {

    afterEach(() => {
      SampleService.get.restore();
    });

    it('should fetch all user data', async function() {
      const jsonSpy = sinon.spy();
      const res = { json:jsonSpy };
      const mockResponse = {
        "response": "hello world"
      }

      sinon
        .stub(SampleService, 'get')
        .callsFake(() => {
          return new Promise((resolve, reject) => {
            resolve(mockResponse);
          });
        });

        const req = {};

      await controller.sampleEndpoint(req, res);

      assert(jsonSpy.calledOnce);
      assert(jsonSpy.calledWith(mockResponse));
    });
  });
});