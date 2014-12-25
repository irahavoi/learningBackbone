require([
  'zepto',
  'backbone',
  'views/root',
  'routers/hello-world',
  'helpers'
], function ($, Backbone, RootView, HelloWorldRouter) {
  $(function() {
    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });

    // RootView may use link or url helpers which
    // depend on Backbone history being setup
    // so need to wait to loadUrl() (which will)
    // actually execute the route
    RootView.getInstance(document.body);

    // Initialize your routers here
    new HelloWorldRouter();

    // This will trigger your routers to start
    Backbone.history.loadUrl();
  });
});