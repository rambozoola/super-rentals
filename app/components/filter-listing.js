import Ember from 'ember';

export default Ember.Component.extend({
	filter: null,
	filteredList: null,
	actions: {
		autoComplete() {
			this.get('autocomplete')(this.get('filter'));
		},
		search() {
			this.get('search')(this.get('filter'));
		},
		choose(city) {
			this.set('filter', city);
		}
	}
});
