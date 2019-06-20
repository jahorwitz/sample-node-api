import JsonService from '../json.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockResponse from '../../test/mockData/example.data';
import assert from 'assert';

const mock = new MockAdapter(axios);
const JSON_DATA_URL = "https://jsonblob.com/api/jsonBlob/43cf4ff8-91ec-11e9-a889-c16b785cfd4b";

describe('Json Service', function() {
  describe('#all()', function() {

    it('should use axios to call out to jsonblob.com', async function() {
        mock.onGet(JSON_DATA_URL).reply(200, mockResponse);

        const response = await JsonService.all();

        assert.deepEqual(response, mockResponse);
    });
  });

  describe('#byZipCode()', function() {

    it('should filter axios response by zip code', async function() {
        const filteredResponse = [
            {
                "guid": "61F59E28-138D-AD45-6B0C-189A81A7C2CD",
                "firstname": "Hasad",
                "lastname": "Walters",
                "zip": "72526",
                "address": "9308 Neque. Avenue",
                "email": "ultrices.mauris@Cras.com",
                "bio": "nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing",
                "hobbies": "movies"
            }
        ];
        mock.onGet(JSON_DATA_URL).reply(200, mockResponse);
  
        const response = await JsonService.byZipCode("72526");

        assert.deepEqual(response, filteredResponse);
    });
  });
});