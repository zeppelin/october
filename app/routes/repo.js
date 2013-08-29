var RepoRoute = Ember.Route.extend({
  model: function(params) {
    return App.Repo.find();
  }
});

export default RepoRoute;
