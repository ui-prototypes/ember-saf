import Ember from 'ember';
import DS from "ember-data";

export default DS.RESTSerializer.extend({
	normalizePayload: function(payload) {

		var applications = [];
		Ember.$.each(payload.applications, function(index, value){
			value.id = index;
			applications.push(value);
		});
		return {wafapps: applications};
	}
});