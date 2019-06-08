const BaseViewModel = require("../../misc/BaseViewModel");

const defaultValues = {
	message: "Mumu2"
};

class ViewModel extends BaseViewModel {
	constructor() {
		super(defaultValues);
	}
}

module.exports = new ViewModel();
