const productImage = document.querySelector(".product-image");
const productTitle = document.querySelector(".product-title");
const productDescription = document.querySelector(".product-description");
const productPrice = document.querySelector(".product-price");
const productListing = document.querySelector(".product-listing");
const mobile = document.querySelector(".mobile");
const laptop = document.querySelector(".laptop");
const fragrances = document.querySelector(".fragrances");
const skincare = document.querySelector(".skincare");
const grocerries = document.querySelector(".grocerries");

// - GLOBAL VARAIBLE TO STORE THE DATA OF API
let alldata, currentdata;

// - FETCH DATA FROM THE API ----------------------
const fetchData = async () => {
  let url = "https://dummyjson.com/products";
  try {
    const response = await fetch(url);
    alldata = await response.json();
    console.log(alldata);
    listProduct(alldata.products);
  } catch {
    console.log("error");
  }
};

// - SORTING FUNCTIONALITY CODE ---------------------------------------
const sortAscendingButton = document.getElementById("sort-ascending");
const sortDescendingButton = document.getElementById("sort-descending");

sortAscendingButton.addEventListener("click", () => {
  sortProductsAscending();
});

sortDescendingButton.addEventListener("click", () => {
  sortProductsDescending();
});

// -  |Sorting functions|
function sortProductsAscending() {
  productListing.innerHTML = "";
  const sortedData = alldata.products.slice().sort((a, b) => a.price - b.price);
  listProduct(sortedData);
}

function sortProductsDescending() {
  productListing.innerHTML = "";
  const sortedData = alldata.products.slice().sort((a, b) => b.price - a.price);
  listProduct(sortedData);
}

// - INDIVIDUAL PRODUCT SELECTING CODE -------------------------------------
laptop.addEventListener("click", () => {
  let mobiledata = alldata.products.filter((data) => {
    return data.category == "laptops";
  });
  productListing.innerHTML = "";
  listProduct(mobiledata);
});

mobile.addEventListener("click", () => {
  const mobiledata = alldata.products.filter((data) => {
    return data.category == "smartphones";
  });
  productListing.innerHTML = "";
  currentdata = mobiledata;
  listProduct(mobiledata);
});

skincare.addEventListener("click", () => {
  let mobiledata = alldata.products.filter((data) => {
    return data.category == "skincare";
  });
  productListing.innerHTML = "";
  listProduct(mobiledata);
});

fragrances.addEventListener("click", () => {
  let mobiledata = alldata.products.filter((data) => {
    return data.category == "fragrances";
  });
  productListing.innerHTML = "";
  listProduct(mobiledata);
});

grocerries.addEventListener("click", () => {
  let mobiledata = alldata.products.filter((data) => {
    return data.category == "groceries";
  });
  productListing.innerHTML = "";
  listProduct(mobiledata);
});

// - LISTING PRODUCT IN THE MAIN PAGE CODE -------------------------------
const listProduct = (fetchdedData) => {
  fetchdedData.forEach((dataitem) => {
    const divelem = document.createElement("div");
    divelem.classList.add("product");
    divelem.innerHTML = `
    <img
          src="${dataitem.images[0] ? dataitem.images[0] : ""}"
          alt="Product Image 1"
          class="product-image"
        />
        <h2 class="product-title">${dataitem.title}</h2>
        <p class="product-description">
          ${
            dataitem.description.length > 80
              ? dataitem.description.slice(0, 30) + "..."
              : dataitem.description
          }
        </p>
        <p class="product-price">$${dataitem.price}</p>
        <button class="buy-button">Buy Now</button>
    `;
    productListing.appendChild(divelem);
  });
};

window.addEventListener("DOMContentLoaded", fetchData());
