import Index from 'october/routes/index';
import App from 'october/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("index renders", function(){
  expect(3);

  visit('/').then(function(){
    ok(exists("h2:contains('Welcome to Ember.js')"));

    var list = find("ul li");
    equal(list.length, 3);
    equal(list.text(), "redyellowblue");
  });
});
