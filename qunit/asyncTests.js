test('An async test', function(){
	stop(); // stops execution of the tests.
	expect( 1 );
	$.ajax({
		url: '/test',
		dataType: 'json',
		success: function( data ){
			deepEqual(data, {
				topic: 'hello',
				message: 'hi there!'
			});
			ok(true, 'Asynchronous test passed!');
	start(); // resumes execution of other tests
}
});