var RepoRoute = Ember.Route.extend({
  model: function(params) {
    return [{
        "id": 4,
        "title": "null",
        "pomodoro_count": 2
      },
      {
        "id": 5,
        "title": "null",
        "pomodoro_count": 2
      },
      {
        "id": 6,
        "title": "null",
        "pomodoro_count": 1
    }];
  }
});

export default RepoRoute;
