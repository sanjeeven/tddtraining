var products = {
	items:['A','B','C','D'],
	productPrices:{
		'A' : '50',
		'B' :'30',
		'C' :'20',
		'D' :'15'
	},
	discountRules:{
		'A' : {
			units:3,
			price:130
		},
		'B' : {
			units:2,
			price:45
		}
	}
}

var Cart = {
	Billing : function(){
		return {
			basketItems : [],
			arrangedBasketItems:{},
			totalPrice:0,
			checkValidItem: function(item){
				return (products.items.indexOf(item) != '-1');
			},
			addItemToBasket: function(item){
				if(this.checkValidItem(item)){
					this.basketItems.push(item);	
				}
				this.arrangeBasketItems();
				this.calculatePrice();
			},
			arrangeBasketItems: function(){
				this.arrangedBasketItems={};
				if(this.basketItems.length > 0)	{
					for( i = 0 ; i < this.basketItems.length ; i++){
						if(!this.arrangedBasketItems[this.basketItems[i]]){
							this.arrangedBasketItems[this.basketItems[i]] = 1;
						}else{
							this.arrangedBasketItems[this.basketItems[i]]++;
						}
					}
				}
			},
			applyDiscountPriceToAnItem: function(item,itemQty){
				var discountItem = products.discountRules[item],
					discountPack,remainingUnits;

					if(discountItem){
						discountPack = Math.floor(itemQty / discountItem.units);
						remainingUnits = itemQty % discountItem.units;	
						return (discountPack * discountItem.price) + (remainingUnits * products.productPrices[item])
					}else{
						return itemQty*products.productPrices[item];
					}
			},
			calculatePrice: function(){
				this.totalPrice = 0;
				for(i in this.arrangedBasketItems){
					this.totalPrice += this.applyDiscountPriceToAnItem(i,this.arrangedBasketItems[i]);
				}
			},
			RemoveItem : function (item){
				if( (this.basketItems.indexOf(item) != '-1'))
				{
					this.basketItems.splice(this.basketItems.indexOf(item),1);
					this.arrangeBasketItems();
					this.calculatePrice();
				}
			},
			ResetCart : function(){
				this.basketItems = [];
				this.arrangedBasketItems= {};
				this.totalPrice=0
			}
		}
	}
}