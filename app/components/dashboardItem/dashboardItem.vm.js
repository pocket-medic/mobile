const BaseViewModel = require("../../misc/BaseViewModel");

const defaultValues = {
	icon: "",
  label: ""
};

class ViewModel extends BaseViewModel {
	constructor() {
		super(defaultValues);
	}
}

module.exports = ViewModel;
