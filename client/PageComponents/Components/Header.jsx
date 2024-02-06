import React, { useState } from "react";
import { useStateContext } from "../../context";
import Link from "next/link";

const Header = () => {
  const { userBalance, disconnect, address, contract, connect } =
    useStateContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderWalletConnectButton = () => {
    return (
      <div
        className="setting-option header-btn rbt-site-header"
        id="rbt-site-header"
      >
        <div className="icon-box">
          <button
            onClick={() => connect()}
            className="btn btn-primary-alta btn-small"
          >
            Wallet connect
          </button>
        </div>
      </div>
    );
  };

  const renderUserAccount = () => {
    return (
      <div className="setting-option rn-icon-list user-account">
        <div className="icon-box">
          <Link href="/author">
            <img src="/icons/boy-avater.png" alt="Images" />
          </Link>
          <div className="rn-dropdown">
            <div className="rn-inner-top">
              <h4 className="title">
                <span>
                  <Link href="#">A/C no. </Link>
                </span>
                <span>{""}</span>
                <Link href="author">{address.slice(0, 15)}...</Link>
              </h4>
            </div>
            <ul className="list-inner">
              <li>
                <Link href="/author">My Profile</Link>
              </li>
              <li>
                <Link href="#" onClick={() => disconnect()}>
                  Disconnect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="rn-header haeder-default header--sticky">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <Link className="logo-light" href="/">
                  <img src="/logo/ll.png" alt="nft-logo" />
                </Link>
                <Link className="logo-dark" href="/">
                  <img src="/logo/logo-dark.png" alt="nft-logo" />
                </Link>
              </div>
              <div className="mainmenu-wrapper">
                <nav
                  id="sideNav"
                  className={`mainmenu-nav ${
                    isMobileMenuOpen ? "show-mobile-menu" : ""
                  } d-none d-xl-block`}
                >
                  <ul className="mainmenu">
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="#">Explore</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/active">
                            Activity<i className="feather-fast-forward"></i>
                          </Link>
                        </li>
                        {address && (
                          <>
                            <li>
                              <Link href="/author">
                                Author<i className="feather-fast-forward"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/create">
                                Create<i className="feather-fast-forward"></i>
                              </Link>
                            </li>
                          </>
                        )}
                        <li>
                          <Link href="/creator">
                            Creator<i className="feather-fast-forward"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">Pages</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/privacy">
                            Privacy<i className="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/404">
                            404<i className="feather-fast-forward"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {address ? null : renderWalletConnectButton()}
              {address ? renderUserAccount() : null}
              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button
                    className="hamberger-button"
                    onClick={toggleMobileMenu}
                  >
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`popup-mobile-menu ${
          isMobileMenuOpen ? "show-mobile-menu" : ""
        }`}
      >
        <div className="inner">
          <div className="header-top">
            {/* <div className="logo logo-custom-css">
              <Link className="logo-light" href="index.html">
                <img src="/logo/ll.png" alt="nft-logo" />
              </Link>
              <Link className="logo-dark" href="index.html">
                <img src="/logo/ll.png" alt="nft-logo" />
              </Link>
            </div> */}
            <div className="logo logo-custom-css">
              <Link className="logo-light" href="index.html">
                <img
                  src="/logo/ll.png"
                  alt="nft-logo"
                  className="mobile-logo"
                />
              </Link>
              <Link className="logo-dark" href="index.html">
                <img
                  src="/logo/ll.png"
                  alt="nft-logo"
                  className="mobile-logo"
                />
              </Link>
            </div>

            <div className="close-menu">
              <button className="close-button" onClick={toggleMobileMenu}>
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul className="mainmenu">
              <li>
                <Link href="/about">About</Link>
              </li>
              <ul className="submenu">
                <li>
                  <Link href="/active">Activity</Link>
                </li>
                {address && (
                  <>
                    <li>
                      <Link href="/author">Author</Link>
                    </li>
                    <li>
                      <Link href="/create">Create</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link href="/creator">Creator</Link>
                </li>
              </ul>
              <ul className="submenu">
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/404">404</Link>
                </li>
              </ul>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
