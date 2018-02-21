const {
  addToBasket,
  totalPrice,
  scan,
  removeFromBasket,
} = require('../src/till');

const apple = {
  barcode: 123,
  price: 5,
};

const banana = {
  barcode: 456,
  price: 6
};

const orange = {
  barcode: 789,
  price: 7,
};

const pineapple = {
  barcode: 5367,
  price: 80,
};

const kiwi = {
  barcode: 765,
  price: 25,
};

const items = [
  apple,
  banana,
  orange,
  pineapple,
  kiwi, 
];

test('scan finds an item by its barcode', () => {
  expect(scan(456, items)).toEqual(banana);
});

test('addToBasket adds an item to the basket', () => {
  const basket = [];

  addToBasket(kiwi, basket);

  expect(basket).toContain(kiwi);
});

test('totalPrice gets the total price of items in the basket', () => {
  const basket = [orange, orange, pineapple];

  expect(totalPrice(basket)).toEqual(94);
});

test('removeFromBasket removes the item with the given barcode from the basket', () => {
  const basket = [kiwi, orange, pineapple];

  removeFromBasket(789, basket);

  expect(basket).not.toContain(orange);
});