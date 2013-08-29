import AuthenticatedRoute from 'october/routes/authenticated';

var RepoRoute = AuthenticatedRoute.extend({
  model: function(params) {
    // fetch data
  }
});

export default RepoRoute;
