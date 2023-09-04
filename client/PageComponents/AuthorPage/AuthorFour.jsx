import React from "react";
import Link from "next/link";
const AuthorFour = () => {
  return (
    <div
      class="rn-popup-modal share-modal-wrapper modal fade"
      id="shareModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        {/* <i data-feather="x"></i> */}
      </button>
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content share-wrapper">
          <div class="modal-header share-area">
            <h5 class="modal-title">Share this NFT</h5>
          </div>
          <div class="modal-body">
            <ul class="social-share-default">
              <li>
                <Link href="#">
                  <span class="icon">
                    {/* <i data-feather="facebook"></i> */}
                  </span>
                  <span class="text">facebook</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span class="icon">
                    {/* <i data-feather="twitter"></i> */}
                  </span>
                  <span class="text">twitter</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span class="icon">
                    {/* <i data-feather="linkedin"></i> */}
                  </span>
                  <span class="text">linkedin</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span class="icon">
                    {/* <i data-feather="instagram"></i> */}
                  </span>
                  <span class="text">instagram</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span class="icon">
                    {/* <i data-feather="youtube"></i> */}
                  </span>
                  <span class="text">youtube</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorFour;
