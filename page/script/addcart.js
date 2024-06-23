// Add Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartUI();
// Delete product from cart
function removeFromCart(productId) {
  const productIndex = cart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
  }
}

// Event click add to cart
page1Products.forEach((product) => {
  const productElement = document.getElementById(`product-${product.id}`);
  const addToCartButton = productElement.querySelector("button");

  addToCartButton.addEventListener("click", () => {
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI();
  });
});

// Update cart UI
function updateCartUI() {
  const cartBox = document.querySelector(".cart-box");
  const cartTitle = document.querySelector(".cart-title");
  cartBox.innerHTML = "";

  // Check
  if (cart.length === 0) {
    cartTitle.style.display = "block";
  } else {
    cartTitle.style.display = "none";
  }

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "product-item";
    cartItem.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <p>${product.name}</p>
      <span>${product.price}</span>
      <button onclick="removeFromCart(${product.id})">Remove</button>
    `;

    cartBox.appendChild(cartItem);
  });
}
