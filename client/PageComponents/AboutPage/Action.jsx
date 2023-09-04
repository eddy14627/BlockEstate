import React from "react";
import Link from "next/link";

const Action = () => {
  return (
    <div class="rn-callto-action rn-section-gapTop">
      <div class="container-fluid about-fluidimg-cta">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="bg_image--6 bg_image bg-image-border"
              data-black-overlay="7"
            >
              <div class="row">
                <div class="col-lg-12">
                  <div class="call-to-action-wrapper">
                    <h3
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Discover rare digital art <br /> and collect NFTs
                    </h3>
                    <p
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      The NFTs is a one-trick pony that climbed the recent
                      years. The growth of NFTs is tremendous, and according to
                      Pymnts.com, the total sales volume{" "}
                    </p>
                    <div
                      class="callto-action-btn-wrapper"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      <Link href="/create" class="btn btn-primary btn-large">
                        Create
                      </Link>
                      <Link
                        href="/contact"
                        class="btn btn-primary-alta btn-large"
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
