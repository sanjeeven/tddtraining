describe("Cart Checkout",function(){
	var cart,testProducts;

	beforeEach(function(){
		cart = Cart.Billing();	
		testProducts = products;	
	});

	it('should have products not be undefined',function(){
		expect(testProducts).not.toBeUndefined();
	});

	it('should have product items not  empty',function(){
		expect(testProducts.items.length > 0).toBeTruthy();
	});

	

	it('should price not be negative',function(){
		for( var i = 0 ; i < testProducts.items.length ; i++){
			expect(testProducts.productPrices[ testProducts.items[i]] > 0) . toBeTruthy();
		}
	});

	it('should have every product item has to be priced ',function(){
		for( var i = 0 ; i < testProducts.items.length ; i++){
			expect(testProducts.productPrices[ testProducts.items[i]] ) .not. toBeUndefined();
		}
	});

	it('should discount price not be negative',function(){
		var discountRules = testProducts.discountRules;
		for( var i in discountRules){
			expect(discountRules[i]['price'] > 0 ).toBeTruthy();
		}
	});

	it('should discount price not be over priced than original price of an item',function(){
		var discountRules = testProducts.discountRules;
		var originalPrices = testProducts.productPrices
		for( var i in discountRules){
			if(discountRules[i]['price']){
				expect(discountRules[i]['price'] < originalPrices[i] * discountRules[i]['units'] ).toBeTruthy();	
			}
			
		}
	});

	it('should not be addItems undefined', function(){
		expect(cart.basketItems).not.toBeUndefined();
	});

	it('should addItems be a collection', function(){
		expect(cart.basketItems instanceof Array).toBeTruthy();
	});

	it('should be a valid Item', function(){
		var item = 'A';
		expect(cart.checkValidItem(item)).toBeTruthy();
	});	

	it('should have no items in the basket in the beginning', function(){
		expect(cart.basketItems.length == 0).toBeTruthy();
	});
	
	it('should able to add item to basket', function(){
		cart.addItemToBasket('A');
		expect(cart.basketItems.length ==1).toBeTruthy();
		cart.addItemToBasket('B');
		expect(cart.basketItems.length ==2).toBeTruthy();
		cart.addItemToBasket('C');
		expect(cart.basketItems.length ==3).toBeTruthy();
		cart.addItemToBasket('D');
		expect(cart.basketItems.length ==4).toBeTruthy();
	});

	it('should not add invalid item to basket',function(){
		var itemCnt = cart.basketItems.length;
		cart.addItemToBasket('F');
		expect(cart.basketItems.length ==itemCnt).toBeTruthy();
	});

	it('should have totalPrice 0 in the begining', function(){
		expect(cart.totalPrice == 0).toBeTruthy();
	});

	it('should apply discount price if applicable', function(){
		var item = 'A', 
			cnt = 3,
		 	discountedPrice = cart.applyDiscountPriceToAnItem(item,cnt);
		expect(discountedPrice).toEqual(130)
	});

	it('should have total price matched with expected price after applying discounts', function(){
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		console.log(cart.totalPrice)
		expect(cart.totalPrice).toEqual(520)
	});

	it('should have total price matched with expected price for n items after applying discounts', function(){
		cart.addItemToBasket('A');
		cart.addItemToBasket('B');
		cart.addItemToBasket('C');
		cart.addItemToBasket('D');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('B');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('F');
		console.log(cart.totalPrice)
		expect(cart.totalPrice).toEqual(390)
	});

it('should have total price matched with expected price after removing an Item', function(){
		cart.addItemToBasket('A');
		cart.addItemToBasket('B');
		cart.addItemToBasket('C');
		cart.addItemToBasket('D');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.RemoveItem('B');
		cart.addItemToBasket('A');
		cart.addItemToBasket('A');
		cart.RemoveItem('A');
		console.log(cart.totalPrice)
		expect(cart.totalPrice).toEqual(265);

	});

	it('should not have Cart undefined', function(){

		expect(cart).not.toBeUndefined();

	});

});

