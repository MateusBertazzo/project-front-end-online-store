export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductById(productId) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const request = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const requestJson = await request.json();
  return requestJson;
}

export async function handleClick(id, title, thumbnail, price) {
  const newItem = { id, title, thumbnail, price, quantity: 1 };
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const NUM = -1;
  const existingItemIndex = cart.findIndex((item) => item.id === id);
  if (existingItemIndex > NUM) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

export async function handleClickDecrease(id, title, thumbnail, price) {
  const newItem = { id, title, thumbnail, price, quantity: 1 };
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const NUM = -1;
  const existingItemIndex = cart.findIndex((item) => item.id === id);
  if (existingItemIndex > NUM) {
    cart[existingItemIndex].quantity -= 1;
  } else {
    cart.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}
