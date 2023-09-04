import React, { useEffect, useState } from "react";

// internal imports
import { useStateContext } from "../context";
import { checkIfImage } from "../utils";
import { ethers } from "ethers";

const IndexOld = () => {
  const {
    address,
    connect,
    contract,
    realEstate,
    createPropertyFunction,
    getPropertiesData,
  } = useStateContext();

  // state Variable
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });

  const handleFromFeildChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.images, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createPropertyFunction({
          ...form,
          price: ethers.utils.parseUnits(form.price, 18),
        });
        setIsLoading(false);
      } else {
        alert("please proveide valid image url");
        setForm({ ...form, images: "" });
      }
    });
  };

  // read data or get data
  const fetchProperty = async () => {
    setIsLoading(true);
    const data = await getPropertiesData();
    setProperties(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperty();
  }, [address, contract]);

  console.log(properties);
  return (
    <div>
      <h1>{realEstate}</h1>
      <button onClick={() => connect()}> connect</button>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="properties"
            onChange={(e) => handleFromFeildChange("propertyTitle", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="description"
            onChange={(e) => handleFromFeildChange("description", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="category"
            onChange={(e) => handleFromFeildChange("category", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="price"
            onChange={(e) => handleFromFeildChange("price", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="images"
            onChange={(e) => handleFromFeildChange("images", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="propertyAddress"
            onChange={(e) => handleFromFeildChange("propertyAddress", e)}
          />
        </div>
        <button type="submit"> Submit</button>
      </form>
      <p>{address}</p>
    </div>
  );
};

export default IndexOld;
