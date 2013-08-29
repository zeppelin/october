var TimerController = Ember.ObjectController.extend({
  isDone: false,
  timeRemaining: null,
  intervalId: null,

  init: function() {
    this._super.apply(this, arguments);
    this.resetTimer();
  },

  resetTimer: function() {
    clearInterval(this.get('intervalId'));
    this.set('timeRemaining', 25*60);
  },

  startTimer: function() {
    var self = this,
        intervalId;

    intervalId = setInterval(function() {
      var timeRemaining = self.get('timeRemaining');

      if (timeRemaining-1 === 0) {
        clearInterval(intervalId);
        self.set('isDone', true);
      }
      self.set('intervalId', intervalId);

      self.decrementProperty('timeRemaining');
    }, 1000);

  },

  isDoneDidChange: function() {
    // AJAX like crazy: complete pomodoro on backend
  }.observes('isDone')
});

export default TimerController;
