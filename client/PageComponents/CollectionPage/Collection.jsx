import React from "react";
import Link from "next/link";

import { Loader } from "../Components";

const Collection = ({ category, isLoading }) => {
  return (
    <div class="rn-collection-area rn-section-gapTop">
      {isLoading ? (
        <Loader />
      ) : category && category.length == 0 ? (
        <div class="container">
          <h1>No Properties</h1>
        </div>
      ) : (
        <div class="container">
          <div class="row g-5">
            {category?.map((el, i) => (
              <div
                key={i + 1}
                data-sal-delay="150"
                data-sal-duration="800"
                class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
              >
                <Link
                  href={`/detail?property=${el.productID}`}
                  class="rn-collection-inner-one"
                >
                  <div class="collection-wrapper">
                    <div class="collection-big-thumbnail">
                      <img src={el.image} alt="Nft_Profile" />
                    </div>
                    <div class="collenction-small-thumbnail">
                      <img
                        src="/collection/collection-sm-01.jpg"
                        alt="Nft_Profile"
                      />
                      <img
                        src="/collection/collection-sm-02.jpg"
                        alt="Nft_Profile"
                      />
                      <img
                        src="/collection/collection-sm-03.jpg"
                        alt="Nft_Profile"
                      />
                    </div>
                    <div class="collection-profile">
                      <img
                        src={`/client/client-${i + 1}.png`}
                        alt="Nft_Profile"
                      />
                    </div>
                    <div class="collection-deg">
                      <h6 class="title">{el.title}</h6>
                      <span class="items">{el.price} MATIC</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div class="row">
            <div
              class="col-lg-12"
              data-sal="slide-up"
              data-sal-delay="550"
              data-sal-duration="800"
            >
              <nav
                class="pagination-wrapper"
                aria-label="Page navigation example"
              >
                <ul class="pagination">
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      Previous
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link active" href="#">
                      1
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      2
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
