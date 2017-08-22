import axios from 'axios';

export default {
  api(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  },

  getPages(wpURL, callback) {
    this.api(wpURL).then((response) => {
      this.getPosts(wpURL, response, callback);
    });
    return true;
  },

  getPosts(wpURLposts, pages, callback) {
    this.api(wpURLposts).then((response) => {
      const posts = response;
      const payload = { pages, posts };
      this.getSuccess(payload);
      callback(payload);
    });
    return true;
  },

  getSuccess(payload) {
    return payload;
  },
};

