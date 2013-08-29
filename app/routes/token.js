var TokenRoute = Ember.Route.extend({
  model: function(params) {
    if (params.token) {
      this.controllerFor('application').set('token', params.token);
      this.transitionTo('repo');
    }
  }
});

export default TokenRoute;
