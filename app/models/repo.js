var Repo = Ember.Model.extend({
  id: Ember.attr(),
  title: Ember.attr(),
  promodoros: Ember.hasMany("App.Pomodoro", {key: 'pomodoro_ids'})
});

export default Repo;
