import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
	this.route('home', {path: '/'});
	this.route('wafapp', {path: '/applications'}, function(){
		this.route('edit', {path: '/:applications_id'});
	});
	this.route('mapping', {path: '/mapping'});
});
