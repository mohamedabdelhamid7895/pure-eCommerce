// create a function to generate the footer HTML
function generateNavbarHtml() {
  return `
    <nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo">Emporium</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="fas fa-bars"></i></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="index.html">Home </a></li>
      <li><a href="form.html">Contact Us</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="#"><i class="fas fa-shopping-cart"><span id="cart-count"></span>
</i></a></li>
     </ul>
  </div>
</nav>

<ul class="sidenav" id="mobile-demo">
  <li><a href="index.html">Home </a></li>
      <li><a href="form.html">Contact Us</a></li>
      <li><a href="about.html">About Us</a></li>
 <li><a href="#"><i class="fas fa-shopping-cart"><span id="cart-count"></span>
</i></a></li></ul>

  `;
}

// insert the footer into the page
document.body.insertAdjacentHTML('beforeBegin', generateNavbarHtml());

