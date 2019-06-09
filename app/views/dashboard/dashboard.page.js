const viewModel = require("./dashboard.vm");
const utils = require("../../misc/utils");
const view = require("ui/core/view");

let drawer;

function onNavigatingTo(args) {
	viewModel.bindContext(args);
	drawer = view.getViewById(args.object, "sideDrawer");
}

function showDiabetesLog() {
	utils.showView("diabetesLog");
}

function toggleDrawer() {
	drawer.toggleDrawerState();
}

function onNavigationItemTap(args) {
	const route = args.object.route;

	if (!route) {
		drawer.toggleDrawerState();
		return;
	}

	utils.showView(route);
}

module.exports = {
	onNavigatingTo: onNavigatingTo,
	showDiabetesLog: showDiabetesLog,
	toggleDrawer: toggleDrawer,
	onNavigationItemTap: onNavigationItemTap
};
