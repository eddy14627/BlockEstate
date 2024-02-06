import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBitcoin,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Live = ({ properties }) => {
  console.log(properties);
  const n = properties.length;
  return (
    <div className="rn-live-bidding-area rn-section-gapTop">
      <div className="container">
        <div className="row mb--30">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title mb--0 live-bidding-title">
                Latest Properties
              </h3>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {properties
            .map((property, idx) => (
              <div
                key={idx + 1}
                className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
              >
                <div className="product-style-one">
                  <div className="card-thumbnail">
                    <Link href={`/detail?property=${property.productID}`}>
                      <img
                        src={property.image}
                        alt={property.title}
                        style={{ height: "200px" }} // Set a fixed height
                      />
                    </Link>
                  </div>
                  <div className="product-share-wrapper">
                    <div className="profile-share">
                      {property.reviewers &&
                        property.reviewers.length !== 0 &&
                        property.reviewers.map((el, i) => (
                          <Link
                            href="#"
                            className="avatar"
                            data-tooltip={`${el.slice(0, 15)}...`}
                          >
                            <img
                              src={`/client/client-${i + 1}.png`}
                              alt="Nft_Profile"
                            />
                          </Link>
                        ))}
                      {property.reviewers && property.reviewers.length !== 0 ? (
                        <Link className="more-author-text" href="#">
                          Interested User
                        </Link>
                      ) : (
                        <>New</>
                      )}
                    </div>
                  </div>
                  <Link href={`/detail?property=${property.productID}`}>
                    <span className="product-name">
                      <FontAwesomeIcon icon={faHome} className="icon" />{" "}
                      {property.title.length >= 25
                        ? `${property.title.slice(0, 22)}...`
                        : property.title}
                    </span>
                  </Link>
                  <span className="latest-bid" style={{ marginTop: "100px" }}>
                    {property.category}
                  </span>
                  <div className="bid-react-area">
                    <div className="last-bid">{property.price} MATIC</div>
                  </div>
                </div>
              </div>
            ))
            .slice(n - 6, n)}
        </div>
        {/* Button to show all properties */}
        <div className="text-center mt-4">
          <Link href="/active">
            <button className="btn btn-primary">
              View All Properties <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Live;
