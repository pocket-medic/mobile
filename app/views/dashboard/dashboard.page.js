const viewModel = require("./dashboard.vm");

function onNavigatingTo(args) {
	viewModel.bindContext(args);
}

exports.onNavigatingTo = onNavigatingTo;
