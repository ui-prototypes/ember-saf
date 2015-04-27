import DS from 'ember-data';

export default DS.Model.extend({
	block_traffic: DS.attr('boolean'),
	name: DS.attr('string'),
	'protected': DS.attr('boolean')
});