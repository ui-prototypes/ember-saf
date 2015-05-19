import Ember from "ember";
import { module,  test } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('home-page-test', {
	setup: function() {
		App = startApp();
	},
	beforeEach: function() {
    	// setup for each module test
    },
 	afterEach: function() {
		// teardown for each module test    	
	},
	teardown: function() {
		// teardown for all module tests
		Ember.run(App, App.destroy);
	}
});

test('Should activate the home link', function(assert) {
	assert.expect(1);
	visit('/').then(function() {
		// pause test for debugging
		//return pauseTest();
		assert.equal(find('a:contains("Home")').hasClass("active"), true);
	});
});