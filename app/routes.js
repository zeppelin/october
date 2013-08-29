function Routes() {
  this.resource('repo', { path: '/' });
  this.resource('token', { path: '/token/:token' });
  this.resource('timer', { path: '/repo/:issue' });
}

export default Routes;
