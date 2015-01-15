test( 'Testing the reverseString function', function(){
var result = reverseString('backbone+qunit');
// equal( actualValue, expectedValue, message )
equal( result, 'tinuq+enobkcab', 'Expected to get a reversed string.');
});


module( 'Module One' );
test( 'first test', function() {
  expect(0);
} );
test( 'another test', function() {
  expect(0);
} );
module( 'Module Two' );
test( 'second test', function() {
  expect(0);
} );
test( 'another test', function() {
  expect(0);
} );
module( 'Module Three' );
test( 'third test', function() {
  expect(0);
} );
test( 'another test', function() {
  expect(0);
} );