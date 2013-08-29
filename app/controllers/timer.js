var TimerController = Ember.Controller.extend({
  isDone: false,
  timeRemaining: 5,

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

  }
});

export default TimerController;
