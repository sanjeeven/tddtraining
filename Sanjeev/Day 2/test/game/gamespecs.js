describe("Guessing Game specs",function(){

	var game;

	beforeEach(function(){
		game = Game.create();
	})


	it("should not be null",function(){
		expect(game).not.toBeNull();
	});

	it("should not have target undefined", function(){
		expect(game.target).not.toBeUndefined();
	});

	it("should not have attempts undefined or null but 0 ", function(){
		expect(attempts).not.toBeNull();
		expect(attempts).not.toBeUndefined();		
		expect(attempts).toEqual;
	});

});