describe("Wishlist", function() {
  var wish, wishlist;
  // Use require.js to fetch the module
  it("should load the AMD module", function(done) {
    require(['models/wish', 'collections/wishes'], function (Wish, WishList) {
      expect(Wish).toBeDefined();
      wish = new Wish();
      wishlist = WishList;	     
      done();
    });
  });

  it("Can add wishes as an object", function() {
    expect(wishlist.length).toBe(0);
    wishlist.add(wish);
    expect(wishlist.length).toBe(1);
  });
 
});
