var TimerController = Ember.Controller.extend({
  isDone: false,

  init: function() {
    this._super();
    var self = this;

    Ember.run.later(function() {
      self.set('isDone', true);
    }, 5000);
  }
});

export default TimerController;
