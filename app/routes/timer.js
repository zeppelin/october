var TimerRoute = Ember.Route.extend({
  model: function(params) {
    // find that shit
  },

  activate: function() {
    var d = {
      pomodoro: {
        user_id: App.userId,
        issue: {
          owner: App.owner,
          repo:  App.repo,
          github_issue_id: App.githubIssueId // params.github_issue_id
        }
      }
    };
    $.post('/pomodoros.json', d, function(data) {
      // this.get('controller').set('model', data.pomodoro);
    });
    this.controllerFor('timer').send('startTimer');
  },

  deactivate: function() {
    this.controllerFor('timer').send('resetTimer');
  }
});

export default TimerRoute;
