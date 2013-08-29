var TimerRoute = Ember.Route.extend({
  model: function(params) {
    // find that shit
  },

  activate: function() {
    this.controllerFor('timer').send('startTimer');
  },

  deactivate: function() {
    this.controllerFor('timer').send('resetTimer');
  }
});

export default TimerRoute;
