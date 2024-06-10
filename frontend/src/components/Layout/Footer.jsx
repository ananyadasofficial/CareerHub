import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-home"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope"></i> habitinfo@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> + 01 234 567 88
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Newsletter</h3>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12 text-center text-primary">
            <p>&copy; 2024 Your Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
