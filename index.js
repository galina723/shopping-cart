const calculateShoppingCart = (price, quantity, discount, tax) => {
  
    const subTotal = price * quantity;
  const discountAmount = subTotal * (discount / 100);
  const afterDiscount = subTotal - discountAmount;
  const taxAmount = afterDiscount * (tax / 100);
  const totalPrice = afterDiscount + taxAmount;

  console.log(`The money you have to pay: ${totalPrice}`);
};
calculateShoppingCart(100,2,10,8);
