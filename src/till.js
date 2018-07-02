function Till() {

  this.products = [
    {
      name: 'apple',
      barcode: 123,
      price: 5,
    }, {
      name: 'banana',
      barcode: 456,
      price: 6,
    }, {
      name: 'orange',
      barcode: 789,
      price: 7,
    }, {
      name: 'pineapple',
      barcode: 5367,
      price: 80,
    }, {
      name: 'kiwi',
      barcode: 765,
      price: 25,
    },
  ];

  this.basket = [];

  this.transaction = [];

  this.tTotal = null;

};

Till.prototype.scan = function (barcode) {

  return this.products.find((bar) => bar.barcode === barcode).name;

};

Till.prototype.addBasket = function (barcode) {

  const item = this.products.find((bar) => bar.barcode === barcode);
  this.basket.push(item);

};

Till.prototype.removeItem = function (barcode) {

  const rmItem = this.basket.find((bar) => bar.barcode === barcode);
  const idxItem = this.basket.indexOf(rmItem);
  this.basket.splice(idxItem, 1);

};

Till.prototype.sale = function () {

  this.transaction = this.basket.slice();
  this.tTotal = this.transaction.reduce(function (x, y) {
    return x + y.price;
  }, 0);
  this.transaction.push({ Total: this.tTotal });
  this.basket = [];

};

module.exports = Till;
