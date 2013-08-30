var AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    var token = window.localStorage.token;

    if (!token) {
      window.location = 'http://localhost:3000/session/new';
    } else {
      $.ajaxSetup({
        data: { 'token': token }
      });
    }
  }
});

export default AuthenticatedRoute;
