import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getTopCreators } from "../../utils";

const Activity = ({ properties, totalReviews }) => {
  const creator = getTopCreators(properties);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    // Filter properties based on the selected category
    if (selectedCategory === "All") {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(
        (property) => property.category === selectedCategory
      );
      setFilteredProperties(filtered);
    }
  }, [selectedCategory, properties]);

  return (
    <div className="rn-activity-area rn-section-gapTop">
      <div className="container">
        <div className="row mb--30">
          <h3 className="title">All Activities</h3>
        </div>
        <div className="row g-6 activity-direction">
          <div className="col-lg-8 mb_dec--15">
            {filteredProperties.length === 0 ? (
              <p>No property of this type</p>
            ) : (
              filteredProperties.map((activity, i) => (
                <div className="single-activity-wrapper" key={i}>
                  <div className="inner">
                    <div className="read-content">
                      <div className="thumbnail">
                        <Link href={`detail?property=${activity.productID}`}>
                          <img src={activity.image} alt="Nft_Profile" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href={`detail?property=${activity.productID}`}>
                          <h6 className="title">{activity.title.slice(0)}</h6>
                        </Link>
                        <p>{activity.owner.slice(0, 25)}...</p>
                        <div className="time-maintane">
                          <div className="user-area data">
                            {activity.address}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="icone-area">
                      {/* <i data-feather="message-circle"></i> */}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="col-lg-4">
            <div className="filter-wrapper">
              <div className="widge-wrapper rbt-sticky-top-adjust">
                <div className="inner">
                  <h3>Analytic</h3>
                  <div className="sing-filter">
                    <button>Total Property : {properties.length}</button>
                    <button>Users : {creator.length}</button>
                    <button>Reviews : {totalReviews}</button>
                  </div>
                </div>
                <div className="inner">
                  <h3>Available Category</h3>
                  <div className="sing-filter">
                    <button onClick={() => setSelectedCategory("All")}>
                      All
                    </button>
                    <button onClick={() => setSelectedCategory("Housing")}>
                      Housing
                    </button>
                    <button onClick={() => setSelectedCategory("Rental")}>
                      Rental
                    </button>
                    <button onClick={() => setSelectedCategory("Office")}>
                      Office
                    </button>
                    <button onClick={() => setSelectedCategory("Commercial")}>
                      Commercial
                    </button>
                    <button onClick={() => setSelectedCategory("Country")}>
                      Country
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

export default Activity;
