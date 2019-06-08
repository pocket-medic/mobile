const frame = require("tns-core-modules/ui/frame");

class Utils {
	showView(viewName) {
		const insaneInTheMainframe = frame.getFrameById("mainFrame");
		insaneInTheMainframe.navigate(`views/${viewName}/${viewName}.page`);
	}
}

module.exports = new Utils();
