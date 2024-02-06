import React, { useState, useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
  useContractEvents,
  //NEW HOOKS FOR FRONTEND
  useDisconnect,
  useSigner,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // const { contract } = useContract(
  //   "0x37E5080006f4546E4250603EB677387eb8E20136"
  // );
  // const { contract } = useContract(
  //   "0x513E53982884E20dD28798819E9c411D20493ea9"
  // );
  const { contract } = useContract(
    "0x7CE3f9EA60e997E1b8DF26B39D25Cc5899Ecf05c"
  );
  const address = useAddress();
  const connect = useMetamask();

  //FRONTEND
  const disconnect = useDisconnect();
  const signer = useSigner();
  const [userBlance, setUserBlance] = useState();

  //FUNCTION

  //CREATE PROPERTY
  const createPropertyFunction = async (form) => {
    const {
      propertyTitle,
      description,
      category,
      price,
      images,
      propertyAddress,
    } = form;

    try {
      const listingPrice = await contract.call("listingPrice");
      const data = await contract.call("listProperty", [
        address,
        price,
        propertyTitle,
        category,
        images,
        propertyAddress,
        description,
      ]);

      console.info("contract call successs", data);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //UPDATE PROPERTY
  const { mutateAsync: updateProperty } = useContractWrite(
    contract,
    "updateProperty"
  );

  const updatePropertyFunction = async (form) => {
    const {
      productId,
      propertyTitle,
      description,
      category,
      images,
      propertyAddress,
    } = form;

    try {
      const data = await updateProperty({
        args: [
          address,
          productId,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      console.info("contract call successs", data);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //UPDATE PRICE
  const { mutateAsync: updatePrice } = useContractWrite(
    contract,
    "updatePrice"
  );

  const updatePriceFunction = async (form) => {
    const { productID, price } = form;
    try {
      const data = await updatePrice({
        args: [address, productID, ethers.utils.parseEther(price)],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //BUY PROPERTY
  const buyPropertyFunction = async (buying) => {
    const { productID, amount } = buying;
    const money = ethers.utils.parseEther(amount);

    try {
      const data = await contract.call("buyProperty", [productID, address], {
        value: money.toString(),
      });
      console.info("contract call successs", data);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //ADD REVIEW
  const { mutateAsync: addReview } = useContractWrite(contract, "addReview");
  const addReviewFunction = async (from) => {
    const { productID, rating, comment } = from;

    try {
      const data = await addReview({
        args: [productID, rating, comment, address],
      });
      console.info("contract call successs", data);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //REVIEW - LIKE
  const { mutateAsync: likeReview } = useContractWrite(contract, "likeReview");
  const likeReviewFunction = async (from) => {
    const { productID, reviewIndex } = from;
    console.log("like function : ", from);
    try {
      const data = await likeReview({
        args: [productID, reviewIndex, address],
      });
      console.info("contract call successs", data);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //GET PROPERTIES DATA NORAML

  //getAllProperties()
  const getPropertiesData = async () => {
    //ALL PROPERTIES
    const properties = await contract.call("getAllProperties");

    //LISTING PRICE
    const listingPrice = await contract.call("getListingPrice");
    const chargePrice = ethers.utils.formatEther(listingPrice.toString());

    //USER BLANCE
    const balance = await signer?.getBalance();
    const userBalance = address
      ? ethers.utils.formatEther(balance?.toString())
      : "";
    setUserBlance(userBalance);
    console.log("properties getPropertiesData", properties);
    const parsedProperties = properties.map((property, i) => ({
      owner: property.owner,
      title: property.propertyTitle,
      description: property.description,
      category: property.category,
      price: ethers.utils.formatEther(property.price.toString()),
      productID: property.productID.toNumber(),
      reviewers: property.reviewrs,
      reviews: property.reviews,
      image: property.images,
      address: property.propertyAddress,
    }));
    return parsedProperties;
  };

  //getHighestRatedProduct()
  const { data: getHighestRatedProduct } = useContractRead(
    contract,
    "getHighestratedProduct"
  );

  //getProductReviews()
  const getProductReviewsFunction = async (productId) => {
    try {
      const getProductReviews = await contract.call("getProductReviews", [
        productId,
      ]);

      const parsedReviews = getProductReviews?.map((review, i) => ({
        reviewer: review.reviewer,
        likes: review.likes.toNumber(),
        comment: review.comment,
        rating: review.rating,
        productID: review.productId.toNumber(),
        reviewIndex: review.reviewIndex,
      }));
      return parsedReviews;
    } catch (error) {
      console.log("getProductReviewsFunction error", error);
    }
  };

  //getProperty()
  const getPropertyFunction = async (id) => {
    const productID = id * 1;

    try {
      const propertyItem = await contract.call("getProperty", [productID]);
      const property = {
        productID: propertyItem?.[0].toNumber(),
        owner: propertyItem?.[1],
        title: propertyItem?.[3],
        category: propertyItem?.[4],
        description: propertyItem?.[7],
        price: ethers.utils.formatEther(propertyItem?.[2].toString()),
        address: propertyItem?.[6],
        image: propertyItem?.[5],
      };
      return property;
    } catch (error) {
      console.log("getPropertyFunction error", error);
    }
  };

  //getUserProperties()
  const getUserPropertiesFunction = async () => {
    try {
      const properties = await contract.call("getUserProperties", [address]);

      const parsedProperties = properties.map((property, i) => {
        console.log("parsed property : ", property);
        return {
          owner: property.owner,
          title: property.propertyTitle,
          description: property.description,
          category: property.category,
          price: ethers.utils.formatEther(property.price.toString()),
          productID: property.productID.toNumber(),
          reviewers: property.reviewers,
          reviews: property.reviews,
          image: property.images,
          address: property.propertyAddress,
        };
      });
      console.log(parsedProperties);
      return parsedProperties;
    } catch (error) {
      console.log(error);
    }
  };

  //getUserReviews()
  const getUserReviewsFunction = () => {
    try {
      const { data: getUserReviews } = useContractRead(
        contract,
        "getUserReviews",
        [address]
      );
      return getUserReviews;
    } catch (error) {}
  };

  //totalProperty()
  const totalPropertyFunction = async () => {
    try {
      const totalProperty = await contract.call("propertyIndex");

      return totalProperty;
    } catch (error) {
      console.log(error);
    }
  };

  const totalReviewsFunction = async () => {
    try {
      const totalReviews = await contract.call("reviewsCounter");

      return totalReviews.toNumber();
    } catch (error) {
      console.log(error);
    }
  };

  //EVENTS
  // You can get a specific event
  const { data: event } = useContractEvents(contract, "PropertyListed");
  // All events
  const { data: allEvents } = useContractEvents(contract);
  // By default, you set up a listener for all events, but you can disable it
  const { data: eventWithoutListener } = useContractEvents(
    contract,
    undefined,
    { subscribe: false }
  );

  return (
    <StateContext.Provider
      value={{
        //CONTRACT
        address,
        contract,
        connect,
        disconnect,
        //PROPERTY
        createPropertyFunction,
        updatePropertyFunction,
        updatePriceFunction,
        buyPropertyFunction,
        getPropertyFunction,
        getUserPropertiesFunction,
        totalPropertyFunction,
        getPropertiesData,
        //REVIEW
        addReviewFunction,
        likeReviewFunction,
        getProductReviewsFunction,
        getUserReviewsFunction,
        totalReviewsFunction,
        getHighestRatedProduct,
        //STATE VARIABLE
        userBlance,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
