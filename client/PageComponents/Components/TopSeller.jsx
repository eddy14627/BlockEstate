import React from "react";
import Link from "next/link";
const TopSeller = ({ creators }) => {
  return (
    <div class="rn-top-top-seller-area nice-selector-transparent rn-section-gapTop">
      <div class="container">
        <div class="row mb--30">
          <div class="col-12 justify-sm-center d-flex">
            <h3
              class="title"
              data-sal-delay="150"
              data-sal=""
              data-sal-duration="800"
            >
              Sellers
            </h3>
          </div>
        </div>
        <div class="row justify-sm-center g-5 top-seller-list-wrapper">
          {creators.map((seller, i) => (
            <div
              key={i + 1}
              data-sal-delay="150"
              data-sal-duration="800"
              class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div class="top-seller-inner-one">
                <div class="top-seller-wrapper">
                  <div class="thumbnail varified">
                    <Link href="/author">
                      <img
                        src={`/client/client-${i + 1}.png`}
                        alt="Nft_Profile"
                      />
                    </Link>
                  </div>
                  <div class="top-seller-content">
                    <Link href="/author">
                      <h6 class="name">{seller.owner.slice(0, 10)}...</h6>
                    </Link>
                    <span class="count-number"> {seller.total} MATIC</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-2.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Ms. Parkline</h6>
                  </Link>
                  <span class="count-number"> $2300,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Methods</h6>
                  </Link>
                  <span class="count-number"> $2100,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail varified">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-4.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Jone sone</h6>
                  </Link>
                  <span class="count-number"> $2000,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-5.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Siddhart</h6>
                  </Link>
                  <span class="count-number"> $200,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail varified">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-6.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Sobuj Mk</h6>
                  </Link>
                  <span class="count-number"> $2000,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail varified">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-7.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Trodband</h6>
                  </Link>
                  <span class="count-number"> $2500,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-8.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Yash</h6>
                  </Link>
                  <span class="count-number"> $2500,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-9.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">YASHKIB</h6>
                  </Link>
                  <span class="count-number"> $2500,000 </span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            class="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
          >
            <div class="top-seller-inner-one">
              <div class="top-seller-wrapper">
                <div class="thumbnail varified">
                  <Link href="author.html">
                    <img
                      src="assets/images/client/client-10.png"
                      alt="Nft_Profile"
                    />
                  </Link>
                </div>
                <div class="top-seller-content">
                  <Link href="author.html">
                    <h6 class="name">Brodband</h6>
                  </Link>
                  <span class="count-number"> $2500,000 </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
