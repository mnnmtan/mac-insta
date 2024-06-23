// Description:  Home, Product, ProductWE, Blog.
// Document Object Model (DOM) - products items.
// home product
// new products
const newProducts = [
  {
    id: 1,
    img: "https://macinsta.vn/wp-content/uploads/2021/09/IS29-3.jpg",
    name: "Đèn bàn kiêm sạc 3in1 và đồng hồ N61",
    price: "650.000đ",
  },
  {
    id: 2,
    img: "https://macinsta.vn/wp-content/uploads/2022/08/IS33-3.jpg",
    name: "Đế sạc không dây 30W kiêm đèn ngủ A37",
    price: "800.000đ",
  },
  {
    id: 3,
    img: "https://macinsta.vn/wp-content/uploads/2017/09/mg025.jpg",
    name: "Đồng hồ bàn LED chất liệu gỗ",
    price: "290.000đ",
  },
  {
    id: 4,
    img: "https://macinsta.vn/wp-content/uploads/2020/02/AD06-midnightgreen-1.jpg",
    name: "Dây Milanese Loop cho Apple Watch",
    price: "450.000đ",
  },
];

// hot products
const hotProducts = [
  {
    id: 1,
    img: "https://macinsta.vn/wp-content/uploads/2020/08/AD51-6.jpg",
    name: "Dây da bò Nail Style cho Apple Watch",
    price: "600.000đ",
  },
  {
    id: 2,
    img: "https://macinsta.vn/wp-content/uploads/2018/04/cs08-bang-so-dien-thoai-dokiy-cho-xe-hoi-chat-lieu-nhom-4.jpg",
    name: "Bảng số điện thoại DOKIY cho xe hơi",
    price: "290.000đ",
  },
  {
    id: 3,
    img: "https://macinsta.vn/wp-content/uploads/2023/07/MI57-1.jpg",
    name: "Tấm lót da cho bàn làm việc loại gập cạnh",
    price: "380.000đ",
  },
  {
    id: 4,
    img: "https://macinsta.vn/wp-content/uploads/2020/07/AD02-rainbow-1.jpg",
    name: "Dây đeo Apple Watch Sport (Nike)",
    price: "350.000đ",
  },
];

// products best seller
const bestSellerProducts = [
  {
    id: 1,
    img: "https://macinsta.vn/wp-content/uploads/2020/10/AD56-7.jpg",
    name: "Dây đính đá Diamante cho Apple Watch",
    price: "550.000đ",
  },
  {
    id: 2,
    img: "https://macinsta.vn/wp-content/uploads/2022/11/AD71-1.jpg",
    name: "Dây Apple Watch Alpine Loop",
    price: "350.000đ",
  },
  {
    id: 3,
    img: "https://macinsta.vn/wp-content/uploads/2020/02/AD06-midnightgreen-1.jpg",
    name: "Dây Milanese Loop cho Apple Watch",
    price: "450.000đ",
  },
  {
    id: 4,
    img: "https://macinsta.vn/wp-content/uploads/2019/03/AD39-21.jpg",
    name: "Dây Sport Band Plus cho Apple Watch",
    price: "380.000đ",
  },
];

// products our
const ourProducts = [
  {
    id: 1,
    img: "https://macinsta.vn/wp-content/uploads/2021/10/MS24-3.jpg",
    name: "Đế giữ đa năng Ice Coorel T1",
    price: "950.000đ",
  },
  {
    id: 2,
    img: "https://macinsta.vn/wp-content/uploads/2023/10/HC17-2.jpg",
    name: "Cổng chuyển đa năng Type-C BSX Hub",
    price: "600.000đ - 650.000đ",
  },
  {
    id: 3,
    img: "https://macinsta.vn/wp-content/uploads/2021/01/HC13-1.jpg",
    name: "Cổng chuyển Type-C to RJ45 8in1 Adapter",
    price: "650.000đ",
  },
  {
    id: 4,
    img: "https://macinsta.vn/wp-content/uploads/2020/12/HC12-3.jpg",
    name: "Cổng chuyển 15in1 kiêm sạc không dây",
    price: "1.300.000đ",
  },
];
// products page 1
const page1Products = [
  {
    id: 1,
    img: "https://macinsta.vn/wp-content/uploads/2024/05/IP48-1.jpg",
    name: "Cổng chuyển 15in1 kiêm sạc không dây",
    price: "1,300,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "mac-accessories",
  },
  {
    id: 2,
    img: "https://macinsta.vn/wp-content/uploads/2018/11/BL24-ggshop-1.jpg",
    name: "Balo chống trộm Compacto thế hệ mới",
    price: "1,000,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "balo-tui",
  },
  {
    id: 3,
    img: "https://macinsta.vn/wp-content/uploads/2020/12/HC12-3.jpg",
    name: "Pin dự phòng PowerSeed 10000mAh",
    price: "750,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "iphone-ipad-accessories",
  },
  {
    id: 4,
    img: "https://macinsta.vn/wp-content/uploads/2020/12/BL82-4.jpg",
    name: "Balo doanh nhân BANGE - MATE BOOK",
    price: "900,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "balo-tui",
  },
  {
    id: 5,
    img: "https://macinsta.vn/wp-content/uploads/2020/11/BL76-4.jpg",
    name: "Balo kỹ thuật số BANGE - MATE BOOK",
    price: "1,100,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "balo-tui",
  },
  {
    id: 6,
    img: "https://macinsta.vn/wp-content/uploads/2020/10/BL71-4.jpg",
    name: "Balo doanh nhân Bopai - SMART SLIM",
    price: "1,800,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "balo-tui",
  },
  {
    id: 7,
    img: "https://macinsta.vn/wp-content/uploads/2023/09/BP06-1.jpg",
    name: "Balo thông minh RZTX 8207",
    price: "930,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "balo-tui",
  },
  {
    id: 8,
    img: "https://macinsta.vn/wp-content/uploads/2018/12/BL28N-9.jpg",
    name: "Balo Mark Ryden - Compacto Pro",
    price: "890,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "balo-tui",
  },
  {
    id: 9,
    img: "https://macinsta.vn/wp-content/uploads/2018/04/cs08-bang-so-dien-thoai-dokiy-cho-xe-hoi-chat-lieu-nhom-4.jpg",
    name: "Bảng số điện thoại DOKIY cho xe hơi",
    price: "270,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "car-accessories",
  },
  {
    id: 10,
    img: "https://macinsta.vn/wp-content/uploads/2021/01/HC13-1.jpg",
    name: "Cổng chuyển Type-C to RJ45 8in1 Adapter",
    price: "700,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "mac-accessories",
  },
  {
    id: 11,
    img: "https://macinsta.vn/wp-content/uploads/2023/05/MI55-10.jpg",
    name: "Chuột không dây trong suốt FMOUSE",
    price: "550,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "mac-accessories",
  },
  {
    id: 12,
    img: "https://macinsta.vn/wp-content/uploads/2023/10/IS46-1.jpg",
    name: "Bộ sạc 3in1 Magsafe THIS IS ONE",
    price: "800,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "iphone-ipad-accessories",
  },
  {
    id: 13,
    img: "https://macinsta.vn/wp-content/uploads/2023/10/IS48-1.jpg",
    name: "Bộ trạm sạc đa năng 6in1 B21",
    price: "500,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "iphone-ipad-accessories",
  },
  {
    id: 14,
    img: "https://macinsta.vn/wp-content/uploads/2022/03/DS32-2.jpg",
    name: "Củ sạc nhanh 33W RY-U33 65W-U65A",
    price: "300,000 - 500,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "iphone-ipad-accessories",
  },
  {
    id: 15,
    img: "https://macinsta.vn/wp-content/uploads/2024/05/AD85-1.jpg",
    name: "Dây da khóa bướm đầu nối thép AD85",
    price: "550,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "apple-watch-accessories",
  },
  {
    id: 16,
    img: "https://macinsta.vn/wp-content/uploads/2021/10/MS24-3.jpg",
    name: "Đế giữ đa năng Ice Coorel T1",
    price: "1,000,000₫",
    addCart: "Thêm vào giỏ hàng",
    category: "mac-accessories",
  },
];

// products we
const weProducts = [
  {
    id: 1,
    img: "https://macinsta.vn/wp-content/uploads/2017/09/mg025.jpg",
    name: "Đồng hồ bàn LED chất liệu gỗ",
    price: "290.000đ",
  },
  {
    id: 2,
    img: "https://macinsta.vn/wp-content/uploads/2023/10/HC17-2.jpg",
    name: "Cổng chuyển đa năng Type-C BSX Hub",
    price: "600.000đ - 650.000đ",
  },
  {
    id: 3,
    img: "https://macinsta.vn/wp-content/uploads/2022/08/IS33-3.jpg",
    name: "Đế sạc không dây 30W kiêm đèn ngủ A37",
    price: "800.000đ",
  },
  {
    id: 4,
    img: "https://macinsta.vn/wp-content/uploads/2021/10/MS24-3.jpg",
    name: "Đế giữ đa năng Ice Coorel T1",
    price: "950.000đ",
  },
];
// Blog
const blogItems = [
  {
    id: 1,
    img: "https://macinsta.vn/wp-content/uploads/2023/09/HS68-5-510x510.jpg",
    title: "HƯỚNG DẪN SỬ DỤNG TAI NGHE GAMING H03",
    content:
      "Hướng dẫn sử dụng tai nghe gaming H03. Thông tin cơ bản tai nghe gaming H03 hỗ trợ Bluetooth 5.3 Khoảng cách dẫn truyền: ~10m Thời gian sử dụng:",
  },
  {
    id: 2,
    img: "https://macinsta.vn/wp-content/uploads/2023/09/HS67-18.jpg",
    title: "HƯỚNG DẪN SỬ DỤNG TAI NGHE OWS-G05",
    content:
      "Hướng dẫn sử dụng tai nghe OWD-G05 OPEN EARBUD. Thông tin cơ bản tai nghe OWS-G05 OPEN EARBUD hỗ trợ chuẩn Bluetooth 5.3 Khoảng cách",
  },
  {
    id: 3,
    img: "https://macinsta.vn/wp-content/uploads/2023/08/HS65-13.jpg",
    title: "HƯỚNG DẪN SỬ DỤNG TAI NGHE P8S 32GB",
    content:
      "Hướng dẫn sử dụng tai nghe truyền xương tích hợp đèn chạy bộ P8S 32GB. Thông tin cơ bản tai nghe truyền xương tích hợp đèn chạy bộ P8s hỗ trợ Bluetooth 5.3",
  },
];
// DOM products
const HomeProductNew = document.querySelector(".product-new");
const HomeProductHot = document.querySelector(".product-hot");
const HomeProductBestSeller = document.querySelector(".product-best-sell");
const HomeProductOur = document.querySelector(".product-our");
const productPage1 = document.querySelector(".page1-product");
const HomeProductWe = document.querySelector(".product-we-item");
const HomeBlog = document.querySelector(".blog-items-home");
const BlogItem = document.querySelector(".blog-items");

// product new
newProducts.forEach((product) => {
  // create DOM product element
  const productElement = document.createElement("div");
  productElement.classList.add("product-item");
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;

  // add product to HomeProductNew
  HomeProductNew.appendChild(productElement);
});

// product hot
hotProducts.forEach((product) => {
  // create DOM product element
  const productElement = document.createElement("div");
  productElement.classList.add("product-item");
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;
  // add product to HomeProductHot
  HomeProductHot.appendChild(productElement);
});
// product best seller
bestSellerProducts.forEach((product) => {
  // create DOM product element
  const productElement = document.createElement("div");
  productElement.classList.add("product-item");
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;
  // add product to HomeProductBestSeller
  HomeProductBestSeller.appendChild(productElement);
});

// product our
ourProducts.forEach((product) => {
  // create DOM product element
  const productElement = document.createElement("div");
  productElement.classList.add("product-item");
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;
  // add product to HomeProductOur
  HomeProductOur.appendChild(productElement);
});

// product page 1
page1Products.forEach((product) => {
  // create DOM product element
  const productElement = document.createElement("div");
  productElement.classList.add("product-item");

  productElement.setAttribute("data-category", product.category);
  productElement.setAttribute("data-order", product.price);

  // create add to cart button
  const addToCartButton = document.createElement("button");
  addToCartButton.innerText = product.addCart;

  // add click event to add to cart button
  addToCartButton.addEventListener("click", () => {
    alert("Đã thêm vào giỏ hàng!");
  });
  productElement.id = `product-${product.id}`;
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;

  // append add to cart button to product element
  productElement.appendChild(addToCartButton);
  // add product to productPage1
  productPage1.appendChild(productElement);
});

// product we
weProducts.forEach((product) => {
  // create DOM product element
  const productElement = document.createElement("div");
  productElement.classList.add("product-item");
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;
  // add product to HomeProductWe
  HomeProductWe.appendChild(productElement);
});
// Blog
blogItems.forEach((blog) => {
  // create DOM blog element
  const blogElement = document.createElement("div");
  blogElement.classList.add("product-item");
  blogElement.innerHTML = `
    <img src="${blog.img}" alt="${blog.title}">
    <p>${blog.title}</p>
    <span>${blog.content}</span>
  `;
  // add blog to BlogItem
  BlogItem.appendChild(blogElement);
});
// Blog Home
blogItems.forEach((blog) => {
  // create DOM blog element
  const blogElement = document.createElement("div");
  blogElement.classList.add("product-item");
  blogElement.innerHTML = `
    <img src="${blog.img}" alt="${blog.title}">
    <p>${blog.title}</p>
    <span>${blog.content}</span>
  `;
  // add blog to HomeBlog
  HomeBlog.appendChild(blogElement);
});
