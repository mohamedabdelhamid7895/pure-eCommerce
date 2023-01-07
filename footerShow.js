// create a function to generate the footer HTML
function generateFooterHTML() {
  return `
    <footer id="page-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure lorem10
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. lorem</p>
          </div>
          <div class="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div class="col-md-4">
            <h3>Connect</h3>
            <ul class="social-links">
              <li><a href="#">FaceBook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
            
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// insert the footer into the page
document.body.insertAdjacentHTML('afterend', generateFooterHTML());

