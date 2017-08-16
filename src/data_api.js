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

  getPages(callback) {
    const wpURLpages = 'http://localhost:8888/sustain_wordpress/wp-json/wp/v2/pages';
    this.api(wpURLpages).then((response) => {
      this.getPosts(response, callback);
    });
    return true;
  },

  getPosts(pages, callback) {
    const wpURLposts = 'http://localhost:8888/sustain_wordpress/wp-json/wp/v2/posts';
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

