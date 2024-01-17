import React from "react";
import Link from "next/link";
const Service = () => {
  return (
    <div class="rn-service-area rn-section-gapTop">
      <div class="container">
        <div class="row">
          <div class="col-12 mb--50">
            <h3
              class="title"
              data-sal-delay="150"
              data-sal=""
              data-sal-duration="800"
            >
              Create and sell your NFTs
            </h3>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div
              data-sal=""
              data-sal-delay="150"
              data-sal-duration="800"
              class="rn-service-one color-shape-7"
            >
              <div class="inner">
                <div class="icon">
                  <img src="/icons/shape-7.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-01</div>
                <div class="content">
                  <h4 class="title">
                    <Link href="#">Set up your wallet</Link>
                  </h4>
                  <p class="description">
                    Powerful features and inclusions, which makes BlockEstate
                    standout, easily customizable and scalable.
                  </p>
                  <Link class="read-more-button" href="#">
                    <i class="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <Link class="over-link" href="#"></Link>
            </div>
          </div>

          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div
              data-sal=""
              data-sal-delay="200"
              data-sal-duration="800"
              class="rn-service-one color-shape-1"
            >
              <div class="inner">
                <div class="icon">
                  <img src="/icons/shape-1.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-02</div>
                <div class="content">
                  <h4 class="title">
                    <Link href="#">Create your collection</Link>
                  </h4>
                  <p class="description">
                    A great collection of beautiful website templates for your
                    need. Choose the best suitable template.
                  </p>
                  <Link class="read-more-button" href="#">
                    <i class="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <Link class="over-link" href="#"></Link>
            </div>
          </div>

          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div
              data-sal=""
              data-sal-delay="250"
              data-sal-duration="800"
              class="rn-service-one color-shape-5"
            >
              <div class="inner">
                <div class="icon">
                  <img src="/icons/shape-5.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-03</div>
                <div class="content">
                  <h4 class="title">
                    <Link href="#">Add your NFT's</Link>
                  </h4>
                  <p class="description">
                    We've made the template fully responsive, so it looks great
                    on all devices: desktop, tablets and.
                  </p>
                  <Link class="read-more-button" href="#">
                    <i class="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <Link class="over-link" href="#"></Link>
            </div>
          </div>

          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div
              data-sal=""
              data-sal-delay="300"
              data-sal-duration="800"
              class="rn-service-one color-shape-6"
            >
              <div class="inner">
                <div class="icon">
                  <img src="/icons/shape-6.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-04</div>
                <div class="content">
                  <h4 class="title">
                    <Link href="#">Sell Your NFT's</Link>
                  </h4>
                  <p class="description">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth NFT's.
                  </p>
                  <Link class="read-more-button" href="#">
                    <i class="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <Link class="over-link" href="#"></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
