import controller from '../controller';
import JsonService from '../../../services/json.service';
import mockResponse from '../../../test/mockData/example.data';
import assert from 'assert';
import sinon from 'sinon';

describe('Json Controller', function() {
  describe('#all()', function() {

    afterEach(() => {
      JsonService.all.restore();
    });

    it('should fetch all user data', async function() {
      const jsonSpy = sinon.spy();
      const res = { json:jsonSpy };

      sinon
        .stub(JsonService, 'all')
        .callsFake(() => {
          return new Promise((resolve, reject) => {
            resolve(mockResponse);
          });
        });

        const req = {};

      await controller.all(req, res);

      assert(jsonSpy.calledOnce);
      assert(jsonSpy.calledWith(mockResponse));
    });
  });

  describe('#byZipCode()', function() {

    afterEach(() => {
      JsonService.byZipCode.restore();
    });

    it('should fetch all user data for a given zip code', async function() {
      const jsonSpy = sinon.spy();
      const res = { json:jsonSpy };

      sinon
        .stub(JsonService, 'byZipCode')
        .callsFake(() => {
          return new Promise((resolve, reject) => {
            resolve(mockResponse);
          });
        });

        const req = {
          params: {
            zipCode: '12345'
          }
        }

      await controller.byZipCode(req, res);

      assert(jsonSpy.calledOnce);
      assert(jsonSpy.calledWith(mockResponse));
    });

    it('should send a 204 code when no such record exists', async function() {
      const endSpy = sinon.stub();
      const statusStub = sinon.stub().returns({ end:endSpy });
      const res = { status:statusStub };

      sinon
        .stub(JsonService, 'byZipCode')
        .callsFake(() => {
          return new Promise((resolve, reject) => {
            resolve();
          });
        });

        const req = {
          params: {
            zipCode: '12345'
          }
        }

      const data = await controller.byZipCode(req, res);

      assert(statusStub.calledOnce);
      assert(statusStub.calledWith(204));
      assert(endSpy.calledOnce);
    });
  });
});