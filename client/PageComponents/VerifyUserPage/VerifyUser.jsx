import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../../context";

const Activity = ({ users }) => {
  const { address, verifyUserFunction } = useStateContext();

  const handleAccept = async (userAddress) => {
    // Call the function to accept the user verification
    try {
      if (userAddress) {
        await verifyUserFunction(userAddress);
        // Optionally, you can refresh the page or update the state
        // to reflect the changes without a page refresh.
        // window.location.reload();
      }
    } catch (error) {
      console.error("Error accepting user:", error);
    }
  };

  const handleReject = (userAddress) => {
    // You can implement reject functionality if needed
    console.log("Reject user:", userAddress);
  };

  const handleViewDocument = (user) => {
    // Open a new window to display the document
    const documentWindow = window.open("", "_blank");

    // Set the content of the new window
    documentWindow.document.write(`
      <html>
        <head>
          <title>User Document</title>
          <style>
            body {
              margin: 0;
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            img {
              max-width: 100%;
              max-height: 100%;
              margin: auto;
              display: block;
            }
          </style>
        </head>
        <body>
          <img src="${user.document}" alt="User Document" />
        </body>
      </html>
    `);

    // Optionally, you can focus on the new window
    documentWindow.focus();
  };

  console.log(users);
  return (
    <div className="rn-activity-area rn-section-gapTop">
      <div className="container">
        <div className="row mb--30">
          <h3 className="title">Unverified Users</h3>
        </div>
        <div className="row g-6 activity-direction">
          <div className="col-lg-8 mb_dec--15">
            {users.length === 0 ? (
              <p>No unverified User Request</p>
            ) : (
              users.map((user, i) => (
                <div className="single-activity-wrapper" key={i}>
                  <div className="inner">
                    {/* <div className="read-content"> */}
                    <div className="thumbnail">
                      <Link href="#">
                        <FontAwesomeIcon
                          icon={faEye}
                          size="2x" // Increase the icon size
                          onClick={() => handleViewDocument(user)}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h2 className="user-area data">{user.address}</h2>
                      <div className="button-area">
                        <button
                          onClick={() => handleAccept(user.address)}
                          className="accept-button"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(user.address)}
                          className="reject-button"
                        >
                          Reject
                        </button>
                      </div>
                      {/* </div> */}
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
