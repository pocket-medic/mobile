const profileVM = require("../profile/profile.vm");

let closeCallback;

function shownModally(args) {
	const utils = require("tns-core-modules/utils/utils");
	const logService = require("../../services/logService");

	closeCallback = args.closeCallback;
	const valueField = args.object.page.getViewById("valueField");

	if (valueField.ios) {
		valueField.focus();
	}

	if (valueField.android) {
		setTimeout(function () {
			valueField.android.requestFocus();

			const imm = utils.ad.getInputMethodManager();
			imm.showSoftInput(valueField.android, 0);
		}, 300);
	}

	logService.getValues()
	.then(profileVM.fromObject.bind(profileVM));
}

function submit(args) {
	const logService = require("../../services/logService");
	const valueField = args.object.page.getViewById("valueField");
	const value = valueField.text;

	const profile = profileVM.toObject();
	profile.glycemia = {
		date: (new Date()).toISOString(),
		value: value
	};

	logService.addValues(profile)
	.then(function(response) {
		closeCallback(response);
		args.object.closeModal();
	})
}

module.exports = {
	shownModally: shownModally,
	submit: submit
}
