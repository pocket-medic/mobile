const viewModel = require("./profile.vm");

function onNavigatingTo(args) {
	const logService = require("../../services/logService");

	viewModel.bindContext(args);

	logService.getValues()
	.then(viewModel.fromObject.bind(viewModel));
}

function submit(args) {
	const logService = require("../../services/logService");

	logService.addValues(viewModel.toObject())
	.then(function() {
		const dialogs = require("tns-core-modules/ui/dialogs");
		dialogs.alert("Medical profile updated")

		goBack(args);
	});
}

function goBack(args) {
	args.object.page.frame.goBack();
}

module.exports = {
	onNavigatingTo: onNavigatingTo,
	submit: submit,
	goBack: goBack
};
