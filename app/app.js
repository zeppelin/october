import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'october', // TODO: loaded via config
  Resolver: Resolver
});

import routes from 'october/routes';
App.Router.map(routes); // TODO: just resolve the router

// Scumbag helpers
import formatRemaining from 'october/helpers/format_remaining';

export default App;
