var AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if (!this.controllerFor('application').get('token')) {
      window.location = 'http://localhost:3000/session/new';
    }
  }
});

export default AuthenticatedRoute;
