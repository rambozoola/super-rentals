import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Developer from './persons/developer';
import Person from './persons/person';

let App;
let dev = Developer.create({
	firstName: "Christian",
	lastName: "Lehmann"
});


dev.say("foo");


Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
