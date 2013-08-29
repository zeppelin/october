var TimerController = Ember.Controller.extend({
  isDone: false,
  remaining: 2,

  startPomodoro: function(item) {
    Ember.run.later(this, function() {
      var countDown = this.get('remaining') - 1;
      this.set('remaining', countDown);
      this.startPomodoro(this);
    }, 1000);
  }
});

export default TimerController;
