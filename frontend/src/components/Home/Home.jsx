import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css"; // Update the import path to point to the correct location of App.css
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      {/* Welcome Message */}
      <div className="row">
        <div className="col-lg-12 text-center mt-5">
          <h1 className="text-primary">Welcome to the CareerHub</h1>
          <p>Find and apply for your dream job today.</p>
          <div className="col-lg-12 text-center">
            <Link to="/register" className="btn btn-success btn-lg">
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="row mt-5">
        <div className="col-lg-8 offset-lg-2">
          <img
            src="https://www.tvisha.com/data/category_images/job-portban-main-banner.jpg"
            alt="Job Portal Banner"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Browse Top Categories Section */}
      <div className="row mt-5">
        <div className="col-lg-12 text-center">
          <h2>Browse Top Categories</h2>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2021/07/Sales-x-Marketing.png"
              className="card-img-top"
              alt="Sales and Marketing"
            />
            <div className="card-body">
              <h5 className="card-title">Sales and Marketing</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQE3kZeJGFOOig/article-cover_image-shrink_720_1280/0/1678128479686?e=2147483647&v=beta&t=jGqHhqWFzeiCI0t4SE3CbNLvUPpmoYr78WtkxjTPFr8"
              className="card-img-top"
              alt="Design and Creative"
            />
            <div className="card-body">
              <h5 className="card-title">Design and Creative</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
              className="card-img-top"
              alt="Full Stack Development"
            />
            <div className="card-body">
              <h5 className="card-title">Full Stack Development</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_A_Content_Writer.jpg"
              className="card-img-top"
              alt="Content Writer"
            />
            <div className="card-body">
              <h5 className="card-title">Content Writer</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-3">
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://inventionland.com/wp/wp-content/uploads/2018/12/inventionland-flying-apps-1.jpg"
              className="card-img-top"
              alt="Mobile Applications"
            />
            <div className="card-body">
              <h5 className="card-title">Mobile Applications</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/08/shutterstock_1912951960.jpg"
              className="card-img-top"
              alt="Cloud Engineer"
            />
            <div className="card-body">
              <h5 className="card-title">Cloud Engineer</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://shorthand.com/the-craft/best-seo-tools/assets/iu6HNESxOw/idea-business-analysis-times-financial-economic-uncertainty-businesspeople-use-laptops-analyze-market-look-solutions-ideas-750x500.jpg"
              className="card-img-top"
              alt="SEO"
            />
            <div className="card-body">
              <h5 className="card-title">SEO</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-hover h-100">
            <img
              src="https://media.licdn.com/dms/image/D4E12AQEnNKiiNUKz9Q/article-cover_image-shrink_720_1280/0/1693476739453?e=2147483647&v=beta&t=vA7q5Jo23C2UXQE4FQ3lTlpB7ugmZa5QZzAfSQ5rQ-A"
              className="card-img-top"
              alt="Software Engineer"
            />
            <div className="card-body">
              <h5 className="card-title">Software Engineer</h5>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="row mt-5">
        <div className="col-lg-12 text-center">
          <h2>How It Works</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-8 offset-lg-2">
          <div
            id="howItWorksCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner carousel-bg">
              <div className="carousel-item active">
                <img
                  src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg"
                  className="d-block w-100"
                  alt="Search a Job"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="carousel-text">Search a Job</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.thevectorimpact.com/wp-content/uploads/2020/08/how-to-apply-for-jobs-online-back.jpg"
                  className="d-block w-100"
                  alt="Apply for Job"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="carousel-text">Apply for Job</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.yourtango.com/sites/default/files/image_blog/job-seeker-with-ten-years-experience-can-not-get-hired-despite-sending-out-five-hundred-applications.png"
                  className="d-block w-100"
                  alt="Get Your Job"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="carousel-text">Get Your Job</h5>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#howItWorksCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#howItWorksCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>

      {/* Our Aim Section */}
      <div className="row mt-5">
        <div className="col-lg-12 text-center">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h2>Our Aim</h2>
              <p className="aim-text">
                Our aim is to connect job seekers with the best opportunities,
                ensuring a seamless and efficient job search experience. Our
                platform is dedicated to providing high-quality job listings and
                helping you achieve your career goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-dark text-white mt-5 pt-4 pb-4">
        <div className="container text-center">
          <p>&copy; 2024 Job Portal. All rights reserved.</p>
          <p>Your gateway to a brighter career.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
