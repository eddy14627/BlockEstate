import React from "react";
import Link from "next/link";

const Activity = ({ Contracts }) => {
  return (
    <div className="rn-activity-area rn-section-gapTop">
      <div className="container">
        <div className="row mb--30">
          <h3 className="title">Unverified Contracts</h3>
        </div>
        <div className="row g-6 activity-direction">
          <div className="col-lg-8 mb_dec--15">
            {Contracts.length === 0 ? (
              <p>No unverified Contracts Request</p>
            ) : (
              Contracts.map((property, i) => (
                <div className="single-activity-wrapper" key={i}>
                  <div className="inner">
                    <div className="read-content">
                      <div className="thumbnail">
                        <Link href="#">
                          <img src="" alt="Nft_Profile" />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="#">
                          <h6 className="title">prr</h6>
                        </Link>
                        <p>...</p>
                        <div className="time-maintane">
                          <div className="user-area data">fjkldsaj;</div>
                        </div>
                      </div>
                    </div>
                    <div className="icone-area"></div>
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

export default Activity;
