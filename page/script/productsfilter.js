// Save state
let initialProductOrder = [];

// Copy state
function saveInitialProductOrder() {
  const products = document.querySelectorAll(".page1-product .product-item");
  initialProductOrder = Array.from(products);
}

saveInitialProductOrder();

function restoreInitialProductOrder() {
  const productContainer = document.querySelector(".page1-product");
  productContainer.innerHTML = ""; // delete all products

  initialProductOrder.forEach((product) => {
    productContainer.appendChild(product.cloneNode(true));
  });
}

// category and sort
function filterProducts(category, orderBy) {
  const products = document.querySelectorAll(".page1-product .product-item");
  const productsArray = Array.from(products);

  // category
  productsArray.forEach((product) => {
    const productCategory = product.getAttribute("data-category");

    if (category !== "" && productCategory !== category) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });

  // sort
  if (orderBy === "price") {
    productsArray.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector("span").innerText.replace(/[đ,]/g, "")
      );
      const priceB = parseFloat(
        b.querySelector("span").innerText.replace(/[đ,]/g, "")
      );
      return priceA - priceB;
    });
  } else if (orderBy === "price-desc") {
    productsArray.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector("span").innerText.replace(/[đ,]/g, "")
      );
      const priceB = parseFloat(
        b.querySelector("span").innerText.replace(/[đ,]/g, "")
      );
      return priceB - priceA;
    });
  } else if (orderBy === "menu_order") {
    restoreInitialProductOrder();
    return;
  }

  const productContainer = document.querySelector(".page1-product");
  productContainer.innerHTML = "";
  productsArray.forEach((product) => {
    productContainer.appendChild(product);
  });
}

// select
const selectElementCategory = document.querySelector(".orderby");

const selectElement = document.querySelector(".ordering1 select");

// change
selectElement.addEventListener("change", function () {
  const selectedOrder = this.value;

  const selectedCategory = document.querySelector(".ordering select").value;

  filterProducts(selectedCategory, selectedOrder);
});

selectElementCategory.addEventListener("change", function () {
  const selectedCategory = this.value;

  filterProducts(selectedCategory);
});
