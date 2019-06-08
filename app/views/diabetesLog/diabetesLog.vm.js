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

	updateFromResponse(response) {
		const data = [];

		response.glycemia.forEach(function(item) {
			data.push({
				date: formatDate(new Date(item.time)),
				value: item.value
			})
		});

		this.setData(data);
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

function formatDate(date) {
	const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();

  return `${day} ${monthNames[monthIndex]}`;
}

module.exports = new ViewModel();
