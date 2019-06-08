const {Observable} = require("tns-core-modules/data/observable");

class BaseViewModel extends Observable {
	constructor(modelDefaults) {
		super();

		this.modelDefaults = modelDefaults;
		this.reset();
	}

	reset() {
		const defaults = Object.assign({}, this.modelDefaults);

		for (let prop in defaults) {
			this.set(prop, defaults[prop]);
		}
	}

	visibleWhen(expression) {
		if (expression) {
			return "visible";
		}

		return "collapse";
	}

	bindContext(args) {
		 args.object.bindingContext = this;
	}
}

module.exports = BaseViewModel;
