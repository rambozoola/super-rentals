import Ember from 'ember';
import Person from './person';

let Developer = Person.extend({
	say(thing) {
		this._super(`echo ${thing}`);
	}
});

export default Developer;
