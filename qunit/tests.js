test( 'Testing the reverseString function', function(){
var result = reverseString('backbone+qunit');
// equal( actualValue, expectedValue, message )
equal( result, 'tinuq+enobkcab', 'Expected to get a reversed string.');
});


module( 'Module One' );
test( 'first test', function() {} );
test( 'another test', function() {} );
module( 'Module Two' );
test( 'second test', function() {} );
test( 'another test', function() {} );
module( 'Module Three' );
test( 'third test', function() {} );
test( 'another test', function() {} );