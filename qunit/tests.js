test( 'Testing the reverseString function', function(){
var result = reverseString('backbone+qunit');
// equal( actualValue, expectedValue, message )
equal( result, 'tinuq+enobkcab', 'Expected to get a reversed string.');
});