import Ember from 'ember';
let Person = Ember.Object.extend({

	firstName: null,

	lastName: null,

	fullName: Ember.computed('firstName', 'lastName', function() {
		return `${this.get('firstName')} ${this.get('lastName')}`;
	}),

	say(thing) {
		var name = this.get('fullName');
		console.log(`${name} says: ${thing}`);
	},

});

export default Person;
