const BaseViewModel = require("../../misc/BaseViewModel");

const defaultValues = {
	norm: [
		{ date: "22 Aug", value: 15 },
		{ date: "23 Aug", value: 15 },
		{ date: "24 Aug", value: 15 }
	],
	data: [
		{ date: "22 Aug", value: 10 },
		{ date: "23 Aug", value: 20 },
		{ date: "24 Aug", value: 15 }
	]
};

class ViewModel extends BaseViewModel {
	constructor() {
		super(defaultValues);
	}
}

module.exports = new ViewModel();
