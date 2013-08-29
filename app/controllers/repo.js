var RepoController = Ember.Controller.extend({
  needs: ['timer'],
  timer: Ember.computed.alias('controllers.timer'),
  content: [1, 2, 3]
});

export default RepoController;
