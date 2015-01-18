// Define a group for our tests
module( 'Assertion Examples');
// equal
test( 'equal', 2, function() {
  var actual = 6 - 5;
  equal( actual, true, 'passes as 1 == true' );
  equal( actual, 1, 'passes as 1 == 1' );
});

//not equal
test( 'notEqual', 2, function() {
  var actual = 6 - 5;
  notEqual( actual, false, 'passes as 1 != false' );
  notEqual( actual, 0, 'passes as 1 != 0' );
});

//strict equal
test( 'strictEqual', 2, function() {
  var actual = 6 - 5;
  strictEqual( actual, true, 'fails as 1 !== true' );
  strictEqual( actual, 1, 'passes as 1 === 1' );
});

//mot strict equal
test('notStrictEqual', 2, function() {
  var actual = 6 - 5;
  notStrictEqual( actual, true, 'passes as 1 !== true' );
  notStrictEqual( actual, 1, 'fails as 1 === 1' );
});

//deep equal <-- A recursive comparison assertion. Unlike strictEqual(), it works on objects, arrays, and primitives.
test('deepEqual', 4, function() {
  var actual = {q: 'foo', t: 'bar'};
  var el = $('div');
  var children = $('div').children();
  equal( actual, {q: 'foo', t: 'bar'}, 'fails - objects are not equal using equal()' );
  deepEqual( actual, {q: 'foo', t: 'bar'}, 'passes - objects are equal' );
  equal( el, children, 'fails - jQuery objects are not the same' );
  deepEqual(el, children, 'fails - objects not equivalent' );
});

//notDeepEqual
test('notDeepEqual', 2, function() {
  var actual = {q: 'foo', t: 'bar'};
  notEqual( actual, {q: 'foo', t: 'bar'}, 'passes - objects are not equal' );
  notDeepEqual( actual, {q: 'foo', t: 'bar'}, 'fails - objects are equivalent' );
});

//throws
test('raises', 1, function() {
  throws(function() {
    throw new Error( 'Oh no! It`s an error!' );
  }, 'passes - an error was thrown inside our callback');
});