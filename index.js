
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});




const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image slider next button
    nextBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber++;

      if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    });

    //image slider previous button
    prevBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber--;

      if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    });

    //image slider autoplay
    var playSlider;

    var repeater = () => {
      playSlider = setInterval(function(){
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
          slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      }, 4000);
    }
    repeater();

    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
      clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
      repeater();
    });
  
  // // Fetch product data from the API
  var cart = [];
  
  function addToCart(product) {
    cart.push(product);
     document.querySelector("#cart-count").innerText = cart.length ;
    
  }
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    // Get the product data
    const products = data;
    
document.querySelector("#products").addEventListener("click", event => {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = event.target.getAttribute("data-id");
    const product = products.find(product => product.id === productId);
    event.preventDefault();
    // Add the item to the cart
    addToCart(product);
    // Store the cart in the local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    event.target.textContent = "Remove from Cart";
    event.target.classList.remove("add-to-cart");
        event.target.classList.add("remove-from-cart");
      }
    });
    // Create the HTML for the products
    console.log(products[0])
    const productsHTML = products.map(product => `
    <div class="col s12 m6 l4">
    <div class="card">
    <div class="card-image">
    <img src="${product.image}">
    </div>
    <div class="card-content">
    <h2 class="card-title">${product.title}</h2>
        <p class="card-desc">${product.description}</p>
        <p class="price">$${product.price}</p>
        </div>
          <div class="card-action">
          <a href="#" class="add-to-cart" data-id="${product.id}">Add to Cart</a>
          </div>
          </div>
          </div>
          `
          
          ).join("");
          document.querySelector("#products").innerHTML = productsHTML;
          
        });
        document.querySelector("#cart-count").innerText = cart.length;
     

document.querySelector("#back-to-top").addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});













fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
      // Retrieve the select element for the category filter
      const categoryFilter = document.getElementById("category-filter");

      // Add an event listener to the select element to filter the products when the value changes
      categoryFilter.addEventListener("change", event => {
        // Retrieve the selected category
        const selectedCategory = event.target.value;

        // Filter the products by the selected category
        const filteredProducts = products.filter(product => {
          if (selectedCategory === "all") {
            return true;
          } else {
            return product.category === selectedCategory;
          }
        });

        // Clear the current product list
        document.getElementById("products").innerHTML = "";

        // Add the filtered products to the page
        filteredProducts.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("card-container");
          productDiv.setAttribute("id","#products")
          productDiv.innerHTML = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="${product.image}">
          </div>
          <div class="card-content">
            <h2 class="card-title">${product.title}</h2>
            <p class="card-desc">${product.description}</p>
            <p class="price">$${product.price}</p>
          </div>
          <div class="card-action">
            <a href="#" class="add-to-cart" data-id="${product.id}">Add to Cart</a>
          </div>
        </div>
      </div>
          
          `;
          document.getElementById("products").appendChild(productDiv);
        });
      });
    });
