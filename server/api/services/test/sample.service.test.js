import SampleService from '../sample.service';
import assert from 'assert';
import sinon from 'sinon';

describe('Sample Service', function () {
  describe('#get()', function () {

    afterEach(() => {
      SampleService.getPgPool.restore();
    });

    it('should return a response', async function () {
      const expected = [
        {
          "sub": "e1a9f9cc-d763-4189-96a4-c86ef7a74129",
          "username": "mcfly85",
          "firstname": "Marty",
          "lastname": "Mcfly",
          "email": "mcfly85@gmail.com",
          "phonenumber": "+15555550123",
          "confirmed": true,
          "gender": "male",
          "zipcode": 12345,
          "createdAt": "2019-09-01T00:58:27.654Z",
          "updatedAt": "2019-09-01T00:58:27.654Z"
        }
      ];

      const endSpy = sinon.spy();
      const mockPool = {
        query: () => Promise.resolve({rows: expected}),
        end: endSpy
      }

      sinon
        .stub(SampleService, 'getPgPool')
        .callsFake(() => {
          return  mockPool;
        });

      const response = await SampleService.get();

      assert.deepEqual(response, expected);
    });
  });
});