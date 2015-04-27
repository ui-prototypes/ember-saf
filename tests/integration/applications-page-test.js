import { moduleForModel,  test } from 'ember-qunit';

test('Should activate the applications link', function() {
  visit('/applications').then(function() {
    test.equal(find('a:contains("Applications")').hasClass("active"), true);
    test.equal(find('a:contains("Mapping")').hasClass("active"), false);
  });
});