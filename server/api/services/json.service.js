import axios from 'axios';
const JSON_DATA_URL = "https://jsonblob.com/api/jsonBlob/43cf4ff8-91ec-11e9-a889-c16b785cfd4b";

class JsonService {
  all() {
    return axios.get(JSON_DATA_URL)
      .then(response => {
        return response.data;
      });
  }

  byZipCode(zipCode) {
    return axios.get(JSON_DATA_URL)
      .then(response => {
        return response.data.filter(user => {
          return user.zip === zipCode
        });
      });
  }
}

export default new JsonService();
