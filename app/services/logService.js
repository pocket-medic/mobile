const http = require("./http");

class LogService {
  addValues(values) {
    return http.post({
      url: "/patient",
      content: values
    });
  }

  getValues() {
    return http.get({
      url: "/patient/5cfca345f15f4c2e600c7a89"
    });
  }
}

module.exports = new LogService();
