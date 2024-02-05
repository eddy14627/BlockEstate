import React, { useEffect, useState } from "react";
import VerifyContracts from "../PageComponents/VerifyContractPage/VerifyContracts.jsx";
import { Header, Footer, Copyright } from "../PageComponents/Components";
import { useStateContext } from "../context";
const Active = () => {
  const [unverifiedContracts, setUnverifiedContracts] = useState([]);

  const { address, contract, verifyContractFunction } = useStateContext();

  //GET DATA
  const fetchProperty = async () => {
    // setIsLoading(true);
    const data1 = await verifyContractFunction();
    setUnverifiedContracts(data1);
    // setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperty();
  }, [address, contract]);

  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <VerifyContracts Contracts={unverifiedContracts} />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Active;
