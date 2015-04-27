import DS from 'ember-data';

export default DS.Model.extend({
	active_ruleset_uuid: DS.attr('string'),
	block_traffic: DS.attr('boolean'),
	bypass_ruleset: DS.attr('boolean'),
	capability: DS.attr('string'),
	default_charset: DS.attr('string'),
	log_id: DS.attr('number'),
	logonly_ruleset_uuid: DS.attr('string'),
	name: DS.attr('string'),
	'protected': DS.attr('boolean'),
	reduced_logging_hosts: DS.hasMany('host'),
	reduced_url_logging: DS.attr('boolean'),
	uuid: DS.attr('boolean'),
});