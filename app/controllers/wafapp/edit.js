import Ember from 'ember';

export default Ember.Controller.extend({
	charsets: ["UTF-8", "ISO-8859-1", "BIG5", "GB2312"],

	actions: {
		saveRecords: function() {
			var model = this.get('model');
			model.save().then(function() {
				Ember.Logger.log('success');
			}, function(){
				Ember.Logger.log('error');
			});
		},
		revertRecords: function() {
			var model = this.get('model');
			if(model.get('isDirty')) {
				model.rollback();
			}
		},
		changeProtectedState: function() {
			var model = this.get('model');
			var state = model.get('protected');
			model.set('protected', !state);
		}
	}

});