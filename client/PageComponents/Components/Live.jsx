import React from "react";

const Live = ({ properties }) => {
  console.log(properties);
  return (
    <div class="rn-live-bidding-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--30">
          <div class="col-lg-12">
            <div class="section-title">
              <h3
                class="title mb--0 live-bidding-title"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Listed Property
              </h3>
            </div>
          </div>
        </div>
        <div class="row g-5">
          {properties
            .map((property, idx) => (
              <div
                key={idx + 1}
                class="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal-delay="150"
                data-sal-duration="800"
              >
                <div
                  class="product-style-one"
                  data-sal-duration="800"
                  data-sal-delay="150"
                >
                  <div class="card-thumbnail">
                    <a href={`/detail?property=${property.productID}`}>
                      <img src={property.image} alt={property.title} />
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      {property.reviewers &&
                        property.reviewers.length !== 0 &&
                        property.reviewers.map((el, i) => (
                          <a
                            class="avatar"
                            data-tooltip={`${el.slice(0, 15)}...`}
                          >
                            <img
                              src={`/client/client-${i + 1}.png`}
                              alt="Nft_Profile"
                            />
                          </a>
                        ))}
                      {property.reviewers &&
                        property.reviewers.length !== 0 && (
                          <a class="more-author-text" href="#">
                            Interested User
                          </a>
                        )}
                    </div>
                  </div>
                  <a href={`/detail?property=${property.productID}`}>
                    <span class="product-name">
                      {property.title.length >= 25
                        ? `${property.title.slice(0, 22)}...`
                        : property.title}
                    </span>
                  </a>
                  <span class="latest-bid">{property.category}</span>
                  <div class="bid-react-area">
                    <div class="last-bid">{property.price} MATIC</div>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 5)}
        </div>
      </div>
    </div>
  );
};

export default Live;
