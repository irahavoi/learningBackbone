require([
  'jquery',
  'backbone',
  'views/root',
  'routers/hello-world',
  'helpers'
], function ($, Backbone, RootView, HelloWorldRouter) {
  $(function() {

  var childView1  = new Thorax.View({
    template : Handlebars.compile('<li>I am a child view 1.</li>')
  });

  var childView2  = new Thorax.View({
    template : Handlebars.compile('<li>I am a child view 2.</li>')
  });


  var view = new Thorax.View({
    model : new Thorax.Model({firstname : 'Illia', lastname  : 'Rahavoi'}),
    hi: "Hello",
    world : 'World',
    child1 : childView1,
    child2 : childView2,
    template: Handlebars.compile("Hello, Mr. {{firstname}} {{lastname}} <br/><ul>{{view child1}}{{view child2}}</ul>")
  });
  view.appendTo('body');
  });
});