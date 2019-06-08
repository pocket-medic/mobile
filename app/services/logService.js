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
      url: "/patient/5cfc1360699209266fa8d2b3"
    });
  }
}

module.exports = new LogService();
