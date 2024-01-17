import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="rn-about-banner-area rn-section-gapTop">
      <div className="container mb--30">
        <div className="row">
          <div className="col-12">
            <h2 className="title about-title-m">
              Direct Teams. <br />
              For Your Dedicated Dreams
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid about-fluidimg ">
        <div className="row">
          <div className="img-wrapper">
            <div className="bg_image--22 bg_image"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="h--100">
              <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                <div className="inner">
                  <h2 className="title">Why We Do This</h2>
                  <p className="about-disc">
                    NFTs are virtual tokens that represent ownership of
                    something inherently distinct and scarce, whether it be a
                    physical or digital item, such as artwork, a soundtrack, a
                    collectible, an in-game item, or real estate. Unlike regular
                    cryptocurrencies like bitcoin or fiat money like the U.S.
                  </p>
                  <Link
                    href="/blog"
                    className="btn btn-primary-alta btn-large mt--20"
                  >
                    See Our Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rn-about-card transparent-bg">
              <div className="inner">
                <h3 className="title">
                  Helping You <br /> Grow In Every Stage.
                </h3>
                <p className="about-disc mb--0">
                  NFTs are virtual tokens that represent ownership of something
                  inherently distinct and scarce, whether it be a physical or
                  digital item, such as artwork, a soundtrack, a collectible, an
                  in-game item, or real estate. Unlike regular cryptocurrencies
                  like bitcoin or fiat money like the U.S.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
