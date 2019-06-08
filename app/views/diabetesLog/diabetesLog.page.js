const viewModel = require("./diabetesLog.vm");
const utils = require("../../misc/utils");

function onNavigatingTo(args) {
	viewModel.bindContext(args);
	viewModel.setData([
		{ date: "10 Aug", value: 9 },
		{ date: "12 Aug", value: 12 },
		{ date: "15 Aug", value: 20 },
		{ date: "22 Aug", value: 16 },
		{ date: "23 Aug", value: 14 },
		{ date: "24 Aug", value: 18 }
	]);
}

module.exports = {
	onNavigatingTo: onNavigatingTo
};
