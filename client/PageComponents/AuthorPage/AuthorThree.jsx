import React from "react";
import { Loader } from "../Components";
import Link from "next/link";

const AuthorThree = ({ properties, author }) => {
  return (
    <div class="rn-authore-profile-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="tab-wrapper-one">
              <nav class="tab-button-one">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="false"
                  >
                    All Properties
                  </button>
                  <button
                    class="nav-link active"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="true"
                  >
                    Owned
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div class="tab-content rn-bid-content" id="nav-tabContent">
          <div
            class="tab-pane row g-5 d-flex fade"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {properties?.map((property, i) => (
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <Link href={`/detail?property=${property.productID}`}>
                      <img src={`${property.image}`} alt="NFT_portfolio" />
                    </Link>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      {property &&
                        property.reviewers &&
                        property.reviewers.map((el, i) => {
                          console.log("property:", property); // Log the value of "property"
                          console.log("el:", el); // Log the value of "el"
                          return (
                            <Link
                              href="author.html"
                              class="avatar"
                              data-tooltip={`${el.slice(0, 15)}...`}
                            >
                              <img
                                src={`/client/client-${i + 1}.png`}
                                alt="Nft_Profile"
                              />
                            </Link>
                          );
                        })}
                      {property &&
                        property.reviewers &&
                        property.reviewers.length !== 0 && (
                          <Link class="more-author-text" href="#">
                            Interested Users
                          </Link>
                        )}
                    </div>
                  </div>
                  <Link href="#">
                    <span class="product-name">
                      {property.title.length >= 25
                        ? `${property.title.slice(0, 22)}....`
                        : property.title}
                    </span>
                  </Link>
                  <span class="latest-bid">Category : {property.category}</span>
                  <div class="bid-react-area">
                    <div class="last-bid">{property.price} MATIC</div>
                    {/* <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">
                        {property &&
                          property.reviewers &&
                          property.reviewers.length}
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            class="tab-pane row g-5 d-flex fade show active"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {author.length == 0 ? (
              properties.length == 0 ? (
                <Loader />
              ) : (
                <h1>No Property Owned</h1>
              )
            ) : (
              author.map((property, i) => (
                <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="product-style-one no-overlay with-placeBid">
                    <div class="card-thumbnail">
                      <Link href={`/detail?property=${property.productID}`}>
                        <img src={`${property.image}`} alt="NFT_portfolio" />
                      </Link>
                      <Link
                        href={`/update?property=${property.productID}`}
                        class="btn btn-primary"
                      >
                        Update
                      </Link>
                    </div>
                    <div class="product-share-wrapper">
                      <div class="profile-share">
                        {property &&
                          property.reviewers &&
                          property.reviewers.map((el, i) => (
                            <Link
                              href="author.html"
                              class="avatar"
                              data-tooltip={`${el.slice(0, 15)}...`}
                            >
                              <img
                                src={`/client/client-${i + 1}.png`}
                                alt="Nft_Profile"
                              />
                            </Link>
                          ))}
                        {property &&
                          property.reviewers &&
                          property.reviewers.length !== 0 && (
                            <Link class="more-author-text" href="#">
                              Interested Users
                            </Link>
                          )}
                      </div>
                    </div>
                    <Link href={`/detail?property=${property.productID}`}>
                      <span class="product-name">
                        {property.title.length >= 25
                          ? `${property.title.slice(0, 22)}....`
                          : property.title}
                      </span>
                    </Link>
                    <span class="latest-bid">
                      Category : {property.category}
                    </span>
                    <div class="bid-react-area">
                      <div class="last-bid">{property.price} MATIC</div>
                      {/* <div class="react-area">
                        <svg
                          viewBox="0 0 17 16"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN kBvkOu"
                        >
                          <path
                            d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                            stroke="currentColor"
                            stroke-width="2"
                          ></path>
                        </svg>
                        <span class="number">
                          {property &&
                            property.reviewers &&
                            property.reviewers.length}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorThree;
