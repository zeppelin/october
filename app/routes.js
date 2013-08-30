function routes() {
  this.resource('repo', { path: '/' });
  this.resource('token', { path: '/token/:token' });
  this.resource('timer', { path: '/:pomodoro_id' });
}

export default routes;
