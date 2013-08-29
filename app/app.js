import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'october', // TODO: loaded via config
  Resolver: Resolver
});

import repo from 'october/models/repo';
App.Repo = repo;

App.Repo.url = "http://localhost:3000/issues";
App.Repo.adapter = Ember.RESTAdapter.create();


import routes from 'october/routes';
App.Router.map(routes); // TODO: just resolve the router

export default App;
