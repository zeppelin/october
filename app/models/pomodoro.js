var Pomodoro = Ember.Model.extend({
  id: Ember.attr(),
  startedAt: Ember.attr(),
  completeddAt: Ember.attr(),
  cancelledAt: Ember.attr(),
  userId: Ember.attr(),
  hasMany: Ember.hasMany('App.Repo', {key: 'issue_id', embedded: true})
});

Pomodoro.url = "http://localhost:3000/pomodoro";
Pomodoro.adapter = Ember.RESTAdapter.create();

export default Pomodoro;
