import DS from "ember-data";

export default DS.RESTAdapter.extend({
	headers: {
		Authorization: 'Basic ' + btoa('admin:admin')
	},
	namespace: 'api/af/latest',
	pathForType: function(path) {
		if(path === 'wafapp' || path === 'wafappedit') {
			return 'applications';
		}
	}
});