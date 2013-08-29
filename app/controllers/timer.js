var TimerController = Ember.ObjectController.extend({
  isDone: false,
  timeRemaining: 25*60,

  init: function() {
    this._super();
    var self = this;

    var intervalId = setInterval(function() {
      var timeRemaining = self.get('timeRemaining');

      if (timeRemaining-1 === 0) {
        clearInterval(intervalId);
        self.set('isDone', true);
      }

      self.decrementProperty('timeRemaining');
    }, 1000);

  },

  isDoneDidChange: function() {
    // AJAX like crazy: complete pomodoro on backend
  }.observes('isDone')
});

export default TimerController;
