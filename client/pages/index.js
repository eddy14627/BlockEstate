import React, { useState, useEffect } from "react";

// internal import
import {
  Header,
  Banner,
  Live,
  Service,
  Product,
  TopSeller,
  Collection,
  Footer,
  Copyright,
} from "../PageComponents/Components";

import { useStateContext, useStatecontext } from "../context";
import { getTopCreators } from "../utils";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const { address, contract, getPropertiesData } = useStateContext();

  // Get Data
  const fetchProperty = async () => {
    setIsLoading(true);
    const data = await getPropertiesData();
    console.log("properties data : ", data);
    setProperties(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperty();
  }, [address, contract]);

  // console.log(properties);
  const housing = [];
  const rental = [];
  const farmhouse = [];
  const office = [];
  const commercial = [];
  const country = [];

  if (!isLoading) {
    properties.map((el, i) => {
      if (el.category == "Country") {
        country.push(el);
      } else if (el.category == "Commercial") {
        commercial.push(el);
      } else if (el.category == "Office") {
        office.push(el);
      } else if (el.category == "Farmhouse") {
        farmhouse.push(el);
      } else if (el.category == "Rental") {
        rental.push(el);
      } else if (el.category == "Housing") {
        housing.push(el);
      }
    });
  }

  // get createor and amount
  const creators = getTopCreators(properties);

  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <Banner />
      <Live properties={properties} />
      <Service />
      {/* <Product properties={properties} /> */}
      <TopSeller creators={creators} />
      <Collection
        housing={housing?.length}
        rental={rental?.length}
        farmhouse={farmhouse?.length}
        office={office?.length}
      />
      <Footer />
      <Copyright />
    </div>
  );
};

export default index;
