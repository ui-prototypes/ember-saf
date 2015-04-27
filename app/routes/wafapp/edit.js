import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		//return this.store.find('wafappedit', params.applications_id);
		return {id: params.applications_id};
	},
	setupController: function(controller, model) {
		this.store.find('wafappedit', model.id).then(function(data) {
			controller.set('title', data.get('name'));
			controller.set('model', data);
		});
	}
});