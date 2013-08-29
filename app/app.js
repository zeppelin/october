import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'october', // TODO: loaded via config
  Resolver: Resolver
});

import repo from 'october/models/repo';
App.Repo = repo;

import routes from 'october/routes';
App.Router.map(routes); // TODO: just resolve the router

export default App;
