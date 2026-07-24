const calculateShoppingCart = (price, quantity, discount, tax) => {
  if (typeof price !== "number" || price <= 0) {
    console.log("Invalid price");
    return;
  }

  if (typeof quantity !== "number" || quantity <= 0) {
    console.log("Invalid quantity");
    return;
  }

  if (typeof discount !== "number" || discount < 0 || discount > 100) {
    console.log("Invalid discount");
    return;
  }

  if (typeof tax !== "number" || tax < 0) {
    console.log("Invalid tax");
    return;
  }
  const subTotal = price * quantity;
  const discountAmount = subTotal * (discount / 100);
  const afterDiscount = subTotal - discountAmount;
  const taxAmount = afterDiscount * (tax / 100);
  const totalPrice = afterDiscount + taxAmount;

  console.log(`The money you have to pay: ${totalPrice}`);
};
calculateShoppingCart(100, 2, 10, 8);
calculateShoppingCart(350, 5, 20, 10);
calculateShoppingCart(50, 10, 0, 5);

calculateShoppingCart(-100, 2, 10, 8);
calculateShoppingCart(100, 0, 10, 8);
calculateShoppingCart(100, 2, 150, 8);