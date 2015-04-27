import Ember from 'ember';

var NavigationController = Ember.ArrayController.extend({
  model: Ember.A([
  	Ember.Object.create({title: "Home", location: 'home', active: null}),
    Ember.Object.create({title: "Applications", location: 'wafapp', active: null}),
    Ember.Object.create({title: "Mapping", location: 'mapping', active: null})
  ]),
  title: "Hyperguard",
  logoUrl: "assets/images/bro_logo.png"
});
 
export default NavigationController;