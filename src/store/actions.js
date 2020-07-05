import api from "../fetch/index";
export default {
  getIndexArticle({}, params) {
    return new Promise((resolve, reject) => {
      api
        .fentchIndexArticle(params)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
