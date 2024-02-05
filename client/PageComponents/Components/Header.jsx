import React, { useEffect } from "react";
import { useStateContext } from "../../context";
import Link from "next/link";
const Header = () => {
  const [isPropertyInspector, setIsPropertyInspector] = React.useState(false);
  const [isContractInspector, setIsContractInspector] = React.useState(false);
  const { userBlance, disconnect, address, contract, connect } =
    useStateContext();

  const propertyInspector = 0x5466eff6d8f7779e757060ef147c56be39beb1f0;

  const contractInspector = 0x21051cfae8c508f31af3b2a799ec0f4334575fb6;

  useEffect(() => {
    setIsContractInspector(address == contractInspector);
    setIsPropertyInspector(address == propertyInspector);
  }, [address]);

  return (
    <>
      <header class="rn-header haeder-default header--sticky">
        <div class="container">
          <div class="header-inner">
            <div class="header-left">
              <div class="logo-thumbnail logo-custom-css">
                <Link class="logo-light" href="/">
                  <img src="/logo/ll.png" alt="nft-logo" />
                </Link>
                <Link class="logo-dark" href="/">
                  <img src="/logo/logo-dark.png" alt="nft-logo" />
                </Link>
              </div>
              <div class="mainmenu-wrapper">
                <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                  <ul class="mainmenu">
                    {!isPropertyInspector && !isContractInspector && (
                      <>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="#">Explore</Link>
                          <ul class="submenu">
                            <li>
                              <Link href="/active">
                                Activity<i class="feather-fast-forward"></i>
                              </Link>
                            </li>
                            {address && (
                              <li>
                                <Link href="/author">
                                  Author<i class="feather-fast-forward"></i>
                                </Link>
                              </li>
                            )}
                            {address && (
                              <li>
                                <Link href="/create">
                                  Create<i class="feather-fast-forward"></i>
                                </Link>
                              </li>
                            )}
                            <li>
                              <Link href="/creator">
                                Creator<i class="feather-fast-forward"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="#">Pages</Link>
                          <ul class="submenu">
                            <li>
                              <Link href="/privacy">
                                Privacy<i class="feather-fast-forward"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/404">
                                404<i class="feather-fast-forward"></i>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </>
                    )}
                    {isPropertyInspector && (
                      <ul class="mainmenu">
                        <li>
                          <Link href="/verifyUser">Verify Users</Link>
                        </li>
                        {/* <li>
                          <Link href="/verifyProperty">Verify Properties</Link>
                        </li> */}
                      </ul>
                    )}
                    {isContractInspector && (
                      <ul class="mainmenu">
                        <li>
                          <Link href="/verifyContract">Verify Contracts</Link>
                        </li>
                      </ul>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header-right">
              {/* connect wallet */}

              {address ? (
                ""
              ) : (
                <div
                  class="setting-option header-btn rbt-site-header"
                  id="rbt-site-header"
                >
                  <div class="icon-box">
                    <button
                      onClick={() => connect()}
                      class="btn btn-primary-alta btn-small"
                    >
                      Wallet connect
                    </button>
                  </div>
                </div>
              )}

              {/* END connect wallet */}

              {address ? (
                <div>
                  <div class="setting-option rn-icon-list user-account">
                    <div class="icon-box">
                      <Link href="#">
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </Link>
                      <div class="rn-dropdown">
                        <div class="rn-inner-top">
                          <h4 class="title">
                            <span>
                              <Link href="#">A/C no. </Link>
                            </span>
                            <span>{""}</span>
                            <Link href="author">{address.slice(0, 15)}...</Link>
                          </h4>
                        </div>

                        <ul class="list-inner">
                          <li>
                            <Link href="/profilePage">My Profile</Link>
                          </li>
                          <li>
                            <Link href="/author">My Properties</Link>
                          </li>
                          <li>
                            <Link href="#" onClick={() => disconnect()}>
                              Disconncet
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="setting-option mobile-menu-bar d-block d-xl-none">
                <div class="hamberger">
                  <button class="hamberger-button">
                    <i class="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div class="popup-mobile-menu">
        <div class="inner">
          <div class="header-top">
            <div class="logo logo-custom-css">
              <Link class="logo-light" href="index.html">
                <img src="/logo/logo-white.png" alt="nft-logo" />
              </Link>
              <Link class="logo-dark" href="index.html">
                <img src="/logo/logo-dark.png" alt="nft-logo" />
              </Link>
            </div>
            <div class="close-menu">
              <button class="close-button">
                <i class="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul class="mainmenu">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link class="nav-a its_new" href="/explor">
                  Explore
                </Link>
              </li>
              <li>
                <Link class="nav-a its_new" href="/">
                  Pages
                </Link>
              </li>
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
