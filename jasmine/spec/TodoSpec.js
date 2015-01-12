describe("Todo", function() {
  var todo;

  beforeEach(function() {
    todo = new app.Todo();
  });

  it("should contain a 'completed' property (false by default)", function() {
    expect(todo.get('completed')).toEqual(false);
  });
 
});
