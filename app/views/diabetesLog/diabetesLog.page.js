const viewModel = require("./diabetesLog.vm");
const utils = require("../../misc/utils");

function onNavigatingTo(args) {
	viewModel.bindContext(args);
}

module.exports = {
	onNavigatingTo: onNavigatingTo
};
