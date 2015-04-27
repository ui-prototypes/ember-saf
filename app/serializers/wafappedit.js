import Ember from 'ember';
import DS from "ember-data";

export default DS.RESTSerializer.extend({
	normalizePayload: function(payload) {

		payload.id = payload.__name;

		delete payload.__path;
		delete payload.__name;
		delete payload.__subnodes;
		delete payload.error_id_config;
		
		return {wafappedit: payload};
	},
	serialize: function(snapshot) {
		var json = {
			name: snapshot.attr('name'),
			'protected': snapshot.attr('protected'),
			default_charset: snapshot.attr('default_charset'),
		};
		return json;
	}, 
	serializeIntoHash: function(hash, type, record, options) {
		Ember.merge(hash, this.serialize(record, options));
	}
});