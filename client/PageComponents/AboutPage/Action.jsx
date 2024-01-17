import React from "react";
import Link from "next/link";

const Action = () => {
  return (
    <div className="rn-callto-action rn-section-gapTop">
      <div className="container-fluid about-fluidimg-cta">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="bg_image--6 bg_image bg-image-border"
              data-black-overlay="7"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="call-to-action-wrapper">
                    <h3>
                      Discover rare digital art <br /> and collect NFTs
                    </h3>
                    <p>
                      The NFTs is a one-trick pony that climbed the recent
                      years. The growth of NFTs is tremendous, and according to
                      Pymnts.com, the total sales volume{" "}
                    </p>
                    <div className="callto-action-btn-wrapper">
                      <Link
                        href="/create"
                        className="btn btn-primary btn-large"
                      >
                        Create
                      </Link>
                      <Link
                        href="/contact"
                        className="btn btn-primary-alta btn-large"
                      >
                        Contact Us
                      </Link>
                    </div>
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

export default Action;
