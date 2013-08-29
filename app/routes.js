function Routes() {
  this.resource('repo', { path: '/' });
  this.resource('token', { path: '/token/:token' });
}

export default Routes;
