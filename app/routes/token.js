var TokenRoute = Ember.Route.extend({
  model: function(params) {
    var token = params.token;

    localStorage.token = token;
    $.ajaxSetup({
      data: { 'token': token }
    });

    this.transitionTo('repo');
  }
});

export default TokenRoute;
