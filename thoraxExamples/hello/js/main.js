require([
  'jquery',
  'backbone',
  'views/root',
  'routers/hello-world',
  'helpers'
], function ($, Backbone, RootView, HelloWorldRouter) {
  $(function() {
  var view = new Thorax.View({
    model : new Thorax.Model({firstname : 'Illia', lastname  : 'Rahavoi'}),
    hi: "Hello",
    world : 'World',
    template: Handlebars.compile("Hello, Mr. {{firstname}} {{lastname}}")
  });
  view.appendTo('body');
  });
});