var Repo = Ember.Model.extend({
  id: Ember.attr(),
  title: Ember.attr(),
  promodoros: Ember.hasMany("App.Pomodoro", {key: 'pomodoro_ids'})
});

Repo.url = "http://localhost:3000/issues";
Repo.adapter = Ember.RESTAdapter.create();

export default Repo;
