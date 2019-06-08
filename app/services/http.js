const http = require("http");
const { SERVER_URL } = require("../misc/const");

class HTTP {
	request(request) {
		request.url = `${SERVER_URL}${request.url}`;

		if (!request.headers) {
			request.headers = {
				"Content-Type": "application/json",
				"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1Y2ZjMTc2YWEyYmI5NTI3YzUxNWYyNzciLCJpYXQiOjE1NjAwMjQ5NDksImV4cCI6MTU2MDExMTM0OSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiN2FhNzVlZDEtZTZiZC00NmMyLTlmZTctYzk5ZWIwMzcyMTU5In0.bxZXi6XYc4x44xPc-XVI5PwBQN9CS3BYP-gzr85a48k"
			};
		}

		return http.request(request)
			.then(function(response) {
				return response.content.toJSON();
			});
	}

	get(request) {
		request.method = "GET";
		return this.request(request);
	}

	post(request) {
		request.method = "POST";
		if (request.content) {
			request.content = JSON.stringify(request.content);
		}
		return this.request(request);
	}
}

module.exports = new HTTP();
