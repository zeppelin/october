var TimerController = Ember.Controller.extend({
  isDone: false,
  remaining: 25000,

  init: function() {
    this._super();
    var self = this;

    /*Ember.run.later(function() {
      self.set('isDone', true);
    }, 5000);*/
  },

  startPomodoro: function() {
    console.log('lorem');
    Ember.run.later(function() {
      var countDown = this.get('remaining') - 1;
      this.set('remaining', countDown);
      this.startPomodoro(this);
    }, 1000);
  }
});

export default TimerController;
