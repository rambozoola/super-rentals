export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('rental', params.rental_id);
	}
});