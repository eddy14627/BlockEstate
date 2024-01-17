import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="rn-footer-one rn-section-gap bg-color--1 mt-5 mt-md-4 mt-sm-4">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-content-wrapper">
              <div className="footer-left">
                <div className="logo-thumbnail logo-custom-css">
                  <Link href="index.html" className="logo-light">
                    <img src="/logo/ll.png" alt="nft-logo" />
                  </Link>
                  <Link href="index.html" className="logo-dark">
                    <img src="/logo/logo-dark.png" alt="nft-logo" />
                  </Link>
                </div>
                <p className="rn-footer-describe">
                  Created with the collaboration of over 60 of the world's best
                  BlockEstate Artists.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-md-4">
            <div className="footer-widget widget-quicklink">
              <h6 className="widget-title">BlockEstate</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <Link href="#">Protocol Explore</Link>
                </li>
                {/* ... other list items */}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-md-4 mt-sm-4">
            <div className="footer-widget widget-information">
              <h6 className="widget-title">Information</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <Link href="/">Market Explore</Link>
                </li>
                <li class="single-list">
                  <Link href="/about">About Us</Link>
                </li>
                <li class="single-list">
                  <Link href="/privacy">Terms</Link>
                </li>
                <li class="single-list">
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-content-wrapper">
              <div className="widget-bottom mt-md-4 pt-md-4">
                <h6 className="title">Get The Latest BlockEstate Updates</h6>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-color--2"
                    placeholder="Your username"
                    aria-label="Recipient's username"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary btn-outline-secondary"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
