var PomodoroCountComponent = Ember.Component.extend({
  count: function() {
    return new Array(this.get('value'));
  }.property('value')
});

export default PomodoroCountComponent;
