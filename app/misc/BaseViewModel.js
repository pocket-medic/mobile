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

	toObject() {
		const result = Object.assign({}, this);

		delete result._observers;
		delete result.modelDefaults;

		return result;
	}

	fromObject(source) {
		const validProps = Object.keys(this.modelDefaults);

		for (let prop in source) {
			if (validProps.indexOf(prop) !== -1) {
				this.set(prop, source[prop]);
			}
		}
	}

	bindContext(args) {
		 args.object.bindingContext = this;
	}
}

module.exports = BaseViewModel;
