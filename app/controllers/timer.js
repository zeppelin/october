var TimerController = Ember.Controller.extend({
  isDone: false,
  timeRemaining: 5,

  init: function() {
    this._super();
    var self = this;

    var intervalId = setInterval(function() {
      if (self.get('timeRemaining') === 0) {
        clearInterval(intervalId);
        self.set('isDone', true);
      } else {
        self.decrementProperty('timeRemaining');
      }
    }, 1000);

  }
});

export default TimerController;
