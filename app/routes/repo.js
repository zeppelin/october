import AuthenticatedRoute from 'october/routes/token';

var RepoRoute = AuthenticatedRoute.extend({
  model: function(params) {
    // fetch data
  }
});

export default RepoRoute;
