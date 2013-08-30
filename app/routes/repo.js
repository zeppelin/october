import AuthenticatedRoute from 'october/routes/authenticated';

var issues = [];
var RepoRoute = AuthenticatedRoute.extend({
  model: function(params) {
    $.getJSON('/issues?owner=emberjs&repo=ember.js', function(result) {
      result.issues.forEach(function(item) {
        issues.pushObject(item);
      });
    });
    return issues;
  }
});

export default RepoRoute;
