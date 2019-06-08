const viewModel = require("./dashboard.vm");
const utils = require("../../misc/utils");

function onNavigatingTo(args) {
	viewModel.bindContext(args);
}

function showDiabetesLog() {
	utils.showView("diabetesLog");
}

module.exports = {
	onNavigatingTo: onNavigatingTo,
	showDiabetesLog: showDiabetesLog
};
