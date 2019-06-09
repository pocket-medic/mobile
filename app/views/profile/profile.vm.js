const BaseViewModel = require("../../misc/BaseViewModel");

const defaultValues = {
	dob: "22/08/1984",
	sex: 0,
	weight: "138",
	height: "197",
	waist: "80",
	triglyceride: "100",
	hdlCholesterol: "40",
	systolicBloodPressure: "80",
	familyHistoryOfCardioIncident: 0
};

class ViewModel extends BaseViewModel {
	constructor() {
		super(defaultValues);
	}

	toObject() {
		const result = super.toObject();

		result.sex = result.sex === 0 ? "m" : "f";
		result.familyHistoryOfCardioIncident = !!result.familyHistoryOfCardioIncident;

		const dateParts = result.dob.split("/");
		result.dob = (new Date(dateParts[2], parseInt(dateParts[1]) - 1, dateParts[0])).toISOString();

		return result;
	}

	fromObject(source) {
		const dob = new Date(source.dob);

		source.dob = `${dob.getDate()}/${dob.getMonth() + 1}/${dob.getFullYear()}`;
		source.sex = source.sex === "m" ? 0 : 1;
		source.familyHistoryOfCardioIncident = source.familyHistoryOfCardioIncident ? 1 : 0;

		super.fromObject(source);
	}
}

module.exports = new ViewModel();
