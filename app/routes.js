function Routes() {
  this.resource('repo', {path: '/'});
  this.resource('timer', {path: '/:pomodoro_id'});
}

export default Routes;
