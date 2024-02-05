import React, { useEffect, useState } from "react";
import VerifyUser from "../PageComponents/VerifyUserPage/VerifyUser.jsx";
import VerifyProperty from "../PageComponents/VerifyPropertyPage/VerifyProperty.jsx";
import { Header, Footer, Copyright } from "../PageComponents/Components";
import { useStateContext } from "../context";
const Active = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [unverifiedUser, setUnverifiedUser] = useState([]);

  const { address, contract, getAllUnverifiedUsers } = useStateContext();

  console.log(getAllUnverifiedUsers);
  //GET DATA
  const fetchProperty = async () => {
    // setIsLoading(true);

    const data1 = await getAllUnverifiedUsers();
    console.log(data1);
    setUnverifiedUser(data1);
    // setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperty();
  }, [address, contract]);

  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <VerifyUser users={unverifiedUser} />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Active;
