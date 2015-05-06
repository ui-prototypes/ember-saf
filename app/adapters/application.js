import DS from "ember-data";

export default DS.RESTAdapter.extend({
	headers: {
		Authorization: 'Basic ' + 'INSERT_TOKEN_HERE'
	},
	namespace: 'api/af/latest',
	pathForType: function(path) {
		if(path === 'wafapp' || path === 'wafappedit') {
			return 'applications';
		}
	}
});