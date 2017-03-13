module.exports = function(RED) {

	var slug = require('slug');        

	/********/
	// Slug //
	/********/
	function Slug_Node(config) {
		RED.nodes.createNode(this,config);
		var node = this;

		node.on('input', function(msg) {

			try {
				msg.payload = slug(msg.payload);
				node.send(msg);
			} catch (e) {
				node.error("Error in slugify process: " + e, msg);
			}
		});
	}

	RED.nodes.registerType("Slug", Slug_Node);
}
