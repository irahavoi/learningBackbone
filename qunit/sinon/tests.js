test( 'should inspect the jQuery.getJSON usage of jQuery.ajax', function () {
this.spy( jQuery, 'ajax' );
jQuery.getJSON( '/todos/completed' );
ok( jQuery.ajax.calledOnce );
equals( jQuery.ajax.getCall(0).args[0].url, '/todos/completed' );
equals( jQuery.ajax.getCall(0).args[0].dataType, 'json' );
});