const viewModel = require("./diabetesLog.vm");
const utils = require("../../misc/utils");



function onNavigatingTo(args) {
	const logService = require("../../services/logService");

	viewModel.bindContext(args);

	logService.getValues()
	.then(viewModel.updateFromResponse.bind(viewModel));
}

function goBack(args) {
	args.object.page.frame.goBack();
}

function showAddLog(args) {
	const parent = args.object;
	const moduleName = `views/addLog/addLog.page`;
	const context = {};

	parent.showModal(moduleName, {
		context: context,
		closeCallback: viewModel.updateFromResponse.bind(viewModel)
	});
}

module.exports = {
	onNavigatingTo: onNavigatingTo,
	goBack: goBack,
	showAddLog: showAddLog
};
