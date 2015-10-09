describe("Hello specs",function(){

	it("should say hello to given name " , function(){

		var message = sayHello("sanjeev");
		expect(message).toBe("Hello sanjeev");

	});

	it("should say bye to a given name", function(){
		var message = sayBye("sanjeev");
		expect(message).toBe("Bye Bye sanjeev")
	});

	

});