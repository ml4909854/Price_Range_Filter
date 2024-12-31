const productList = document.getElementById("productList");
const checkBoxes = document.querySelectorAll(".checkbox");
const filterBtn = document.getElementById("filter-price");

async function getData() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();

  showData(data.products);
  priceRange(data.products);
}

function showData(products) {
  productList.innerHTML = ""; // Clear the previous product list

  products.forEach((product) => {
    let div = document.createElement("div");

    let images = document.createElement("img");
    images.src = product.images[0];
    images.style.width = "100px";

    let title = document.createElement("p");
    title.innerHTML = `Title: ${product.title}`;

    let price = document.createElement("p");
    price.innerHTML = `Price: $${product.price}`;

    let category = document.createElement("p");
    category.innerHTML = `Category: ${product.category}`;

    div.append(images, title, price, category);
    productList.append(div);
  });
}

function priceRange(products) {
  filterBtn.addEventListener("click", function () {
    let filteredProducts = []; // Initialize the array to store filtered products

    // Loop through all checkboxes
    checkBoxes.forEach((checkbox) => {
      if (checkbox.checked) {
        let filtered = [];

        // Filter based on the selected checkbox
        if (checkbox.value === "below100") {
          filtered = products.filter((product) => product.price < 100);
        }
        if (checkbox.value === "100to200") {
          filtered = products.filter((product) => product.price >= 100 && product.price <= 200);
        }
        if (checkbox.value === "200to300") {
          filtered = products.filter((product) => product.price >= 200 && product.price <= 300);
        }
        if (checkbox.value === "300to400") {
          filtered = products.filter((product) => product.price >= 300 && product.price <= 400);
        }
        if (checkbox.value === "400to500") {
          filtered = products.filter((product) => product.price >= 400 && product.price <= 500);
        }
        if (checkbox.value === "above500") {
          filtered = products.filter((product) => product.price > 500);
        }
        if (checkbox.value === "above1000") {
          filtered = products.filter((product) => product.price > 1000);
        }
        if (checkbox.value === "above1500") {
          filtered = products.filter((product) => product.price > 1500);
        }

        // Merge the results to avoid duplication
        filteredProducts = [...new Set([...filteredProducts, ...filtered])];
      }
    });

    // Display the filtered products
    showData(filteredProducts);
  });
}

getData();
