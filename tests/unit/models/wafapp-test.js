import { moduleForModel, test } from 'ember-qunit';

moduleForModel('wafapp', 'wafapp-model-test', {
  // Specify the other units that are required for this test.
  needs: []
});

test('wafapp is a valid ember-data Model', function(assert) {

	// retrieves the DS.Store
	var store = this.store();
	// calls the factory for the DS.Model
	var app = this.subject({block_traffic: true, name: 'foobar', 'protected': true});

	assert.ok(app);
	assert.ok(app instanceof DS.Model);

	assert.equal(app.get('name'), 'foobar');

});
