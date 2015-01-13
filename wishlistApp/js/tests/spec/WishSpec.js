describe("Wish", function() {
  var wish;

  beforeEach(function() {
    wish = new app.Wish();
  });

  it("should contain a 'granted' property (false by default)", function() {
    expect(wish.get('granted')).toEqual(false);
  });
 
});
