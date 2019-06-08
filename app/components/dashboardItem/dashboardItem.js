const ViewModel = require("./dashboardItem.vm");

function loaded(args) {
	const viewModel = new ViewModel();
	viewModel.bindContext(args);
	viewModel.set("icon", args.object.icon);
	viewModel.set("label", args.object.label);
}

module.exports = {
	loaded: loaded
}
