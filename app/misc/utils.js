const frame = require("tns-core-modules/ui/frame");

module.exports = {
	showView: function(viewName) {
		const insaneInTheMainframe = frame.getFrameById("mainFrame");
		insaneInTheMainframe.navigate(`views/${viewName}/${viewName}.page`);
	}
}
