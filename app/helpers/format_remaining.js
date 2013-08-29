Ember.Handlebars.helper('format-remaining', function(value) {
  var minutes = Math.floor(value / 60);
  var seconds = value - minutes * 60;

  return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
});
