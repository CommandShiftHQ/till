const Till = require('../src/till');

describe('constructor', () => {

  it('returns an object', () => {
    expect(new Till()).toBeInstanceOf(Object);
  });
});

describe('scan', () => {

  it('scans the barcode an returns product name', () => {

    const till = new Till();

    expect(till.scan(123)).toEqual('apple');
  });
});

describe('addBasket', () => {

  it('adds a product to the basket', () => {

    const till = new Till();
    till.addBasket(123);

    expect(till.basket).toEqual([{ name: 'apple', barcode: 123, price: 5 }]);

  });

  it('adds several products to the basket', () => {

    const till = new Till();
    till.addBasket(123);
    till.addBasket(765);
    till.addBasket(456);

    expect(till.basket).toEqual([
      { name: 'apple', barcode: 123, price: 5 },
      { name: 'kiwi', barcode: 765, price: 25 },
      { name: 'banana', barcode: 456, price: 6 },
    ]);

  });

});

describe('removeItem', () => {

  it('removes an item from the basket by barcode', () => {

    const till = new Till();
    till.addBasket(123);
    till.addBasket(765);
    till.addBasket(456);

    till.removeItem(765);

    expect(till.basket).toEqual([
      { name: 'apple', barcode: 123, price: 5 },
      { name: 'banana', barcode: 456, price: 6 },
    ]);

  });

});

describe('sale', () => {

  it('saves the basket to transaction array, totals the sale an clears the basket', () => {

    const till = new Till();
    till.addBasket(123);
    till.addBasket(765);
    till.addBasket(456);
    till.sale();

    expect(till.transaction).toEqual([
      { name: 'apple', barcode: 123, price: 5 },
      { name: 'kiwi', barcode: 765, price: 25 },
      { name: 'banana', barcode: 456, price: 6 },
      { Total: 36 },
    ]);

    expect(till.tTotal).toEqual(36);
    expect(till.basket).toEqual([]);
  });
});
