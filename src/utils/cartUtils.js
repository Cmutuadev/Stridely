export const calculateCartTotal = (cart) => {
  if (!Array.isArray(cart)) {
    return 0;
  }
  return cart.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const amount = item.amount || 0;
    return acc + (price * amount);
  }, 0);
};


export const calculateCartQuantity = (cart) => {
  if (!Array.isArray(cart)) {
    return 0;
  }
  return cart.reduce((acc, item) => acc + (item.amount || 0), 0);
};

export const filterProductsByQuery = (products, query) => {
  if (!Array.isArray(products)) {
    return [];
  }
  if (!query || query.trim() === '') {
    return products;
  }
  const lowerQuery = query.toLowerCase();
  return products.filter((product) =>
    product.title && product.title.toLowerCase().includes(lowerQuery)
  );
};
