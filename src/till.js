const scan = (barcode, items) => {
  return items.find((item) => {
    return item.barcode === barcode;
  });
}

const addToBasket = (item, basket) => {
  basket.push(item);
}

const totalPrice = (basket) => {
  return basket.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

const removeFromBasket = (barcode, basket) => {
  const item = scan(barcode, basket);
  const index = basket.indexOf(item);
  basket.splice(index, 1);
}

module.exports = {
  scan,
  addToBasket,
  totalPrice,
  removeFromBasket,
};