import React, { useEffect, useState } from "react";
import VerifyProperty from "../PageComponents/VerifyPropertyPage/VerifyProperty.jsx";
import {
  Header,
  Footer,
  Copyright,
} from "../PageComponents/Components/index.js";
import { useStateContext } from "../context/index.js";
const Active = () => {
  const [unverifiedProperty, setUnverifiedProperty] = useState([]);

  const { address, contract, verifyUserFunction, verifyPropertyFunction } =
    useStateContext();

  //GET DATA
  // const fetchProperty = async () => {
  //   // setIsLoading(true);
  //   const data2 = await verifyPropertyFunction();
  //   setUnverifiedProperty(data2);
  //   // setIsLoading(false);
  // };

  // useEffect(() => {
  //   if (contract) fetchProperty();
  // }, [address, contract]);

  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <VerifyProperty properties={unverifiedProperty} />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Active;
