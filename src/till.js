function Till() {

  this.products = [
    {
    name: 'apple',
    barcode: 123,
    price: 5,
    },{
    name: 'banana',
    barcode: 456,
    price: 6
    },{
    name: 'orange',
    barcode: 789,
    price: 7,
    },{
    name: 'pineapple',
    barcode: 5367,
    price: 80,
    },{
    name: 'kiwi',
    barcode: 765,
    price: 25,
    }
  ];

  this.basket = [];

  this.transaction = [];

  this.tTotal;

};

Till.prototype.scan = function(barcode) {

  return this.products.find((bar) => bar.barcode === barcode).name;

};

Till.prototype.addBasket = function(barcode) {

  let item = this.products.find((bar) => bar.barcode === barcode);
  this.basket.push(item);

};

Till.prototype.removeItem = function(barcode) {

  let rmItem = this.basket.find((bar) => bar.barcode === barcode);
  let idxItem = this.basket.indexOf(rmItem);
  this.basket.splice(idxItem, 1);

};

Till.prototype.sale = function() {

  this.transaction = this.basket.slice();
  this.tTotal = this.transaction.reduce(function(x, y) {
    return x + y.price;
    },0); 
  this.transaction.push({'Total': this.tTotal});
  this.basket = [];
    
};



/*  name: scan ,
, items) => {
  return items.find((item) => {
    return item.barcode === barcode;
  });
}
  name: addTo,
  item, basket) => {
  basket.push(item);
}
  name: total,
  asket) => {
  return basket.reduce((total, item) => {
    return total + item.price;
  }, 0);
}
  name: remov,
  t = (barcode, basket) => {
  name: item ,
  code, basket);
  name: index,
  indexOf(item);
  basket.splice(index, 1);
}
*/
module.exports = Till;
//  scan,
//  addToBasket,
//  totalPrice,
//  removeFromBasket,

