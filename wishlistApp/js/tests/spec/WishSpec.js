describe("Wish", function() {
  var wish;
  // Use require.js to fetch the module
  it("should load the AMD module", function(done) {
    require(['models/wish'], function (Wish) {
      expect(Wish).toBeDefined();
      wish = new Wish();      
      done();
    });
  });

  it("should contain a 'granted' property (false by default)", function() {
    expect(wish.get('granted')).toEqual(false);
  });
 
});
