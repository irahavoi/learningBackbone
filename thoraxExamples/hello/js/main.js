require([
  'jquery',
  'backbone',
  'views/root',
  'routers/hello-world',
  'helpers'
], function ($, Backbone, RootView, HelloWorldRouter) {
  $(function() {
  var view = new Thorax.View({
    hi: "Hello",
    world : 'World',
    template: Handlebars.compile("{{hi}} {{world}}")
  });
  view.appendTo('body');
  });
});