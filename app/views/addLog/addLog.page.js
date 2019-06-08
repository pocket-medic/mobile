let closeCallback;

function shownModally(args) {
	const utils = require("tns-core-modules/utils/utils");

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
}

function submit(args) {
	const logService = require("../../services/logService");
	const valueField = args.object.page.getViewById("valueField");
	const value = valueField.text;

	logService.addValues({
		glycemia: {
			date: (new Date()).toISOString(),
			value: value
		}
	})
	.then(function(response) {
		closeCallback(response);
		args.object.closeModal();
	})
}

module.exports = {
	shownModally: shownModally,
	submit: submit
}
