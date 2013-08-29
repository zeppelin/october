var TimerRoute = Ember.Route.extend({
  activate: function() {
    this.controllerFor('timer').send('startPomodoro');
  },

  deactivate: function() {
    this.controllerFor('timer').send('cancelPomodoro');
  }
});

export default TimerRoute;
