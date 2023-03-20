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
  const itens = { id, title, thumbnail, price, quantity: 1 };
  let itens2 = localStorage.getItem('cart') || [];

  if (itens2.length) {
    itens2 = JSON.parse(itens2);
  }

  itens2.forEach((check, index) => {
    if (check.id === itens2.id) {
      itens2[index].quantity += 1;
    }
  });

  localStorage.setItem('cart', JSON.stringify([...itens2, itens]));
}
