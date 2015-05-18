import Ember from "ember";
import { module,  test } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('home-page-test', {
	beforeEach: function() {
    	App = startApp();
    },
 	afterEach: function() {
    	Ember.run(App, App.destroy);
	}
});

test('Should activate the home link', function(assert) {
	assert.expect(1);
	visit('/').then(function(){
		//return pauseTest();
		assert.equal(find('a:contains("Home")').hasClass("active"), true);
	});
});