const BaseViewModel = require("../../misc/BaseViewModel");

const NORM = 15;
const defaultValues = {
	norm: null,
	data: null
};

class ViewModel extends BaseViewModel {
	constructor() {
		super(defaultValues);
	}

	setData(data) {
		const norm = [];
		const formatterData = []

		data.forEach(function(item) {
			const clone = Object.assign({}, item);
			clone.value = NORM;
			norm.push(clone);

			formatterData.push(new LogItem(item));
		});

		this.set("data", formatterData);
		this.set("norm", norm);
	}
}

class LogItem {
	constructor(dataItem) {
		this.date = dataItem.date;
		this.value = dataItem.value;
	}

	get classValue() {
		if (this.value > NORM) {
			return "list-group-item bad";
		}

		return "list-group-item";
	}
}

module.exports = new ViewModel();
