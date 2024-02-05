import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//INTERNAL IMPORT
import { CreateOne } from "../PageComponents/CreatePage";
import {
  Header,
  Footer,
  Copyright,
  Loader,
} from "../PageComponents/Components";
import { useStateContext } from "../context";
import { checkIfImage } from "../utils";
import axios from "axios";

const categories = [
  "Housing",
  "Rental",
  "Farmhouse",
  "Office",
  "commercial",
  "country",
];

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className="nice-select mb--30"
      tabIndex="0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="current">{value || "Select Category"}</span>
      {isOpen && (
        <ul className="list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="option"
              data-value={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Update = () => {
  useEffect(() => {
    // import("bootstrap/dist/css/bootstrap.min.css");
    // Initialize Bootstrap JavaScript after the component is rendered
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const router = useRouter();
  const { query } = router;
  const propertyId = query.property;

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [diplayImg, setDiplayImg] = useState(null);
  const [fileName, setFileName] = useState("Upload Image");

  const { updatePropertyFunction } = useStateContext();

  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });

  const handleFormFieldChange = (fileName, e) => {
    setForm({ ...form, [fileName]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    checkIfImage(form.images, async (exists) => {
      if (exists) {
        await updatePropertyFunction({
          ...form,
          productId: query.property * 1,
        });
        setIsLoading(false);
        window.location.reload();
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, images: "" });
      }
    });
  };

  const uploadToPinata = async () => {
    setFileName("Image Uploading...");
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        console.log("h1");
        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `afa9d784d697660c47b0`,
            pinata_secret_api_key: `9f1e9a344069a388878a1e1bf8ee02038b3eebec5535f7ed4a2b13f9ef13aebf`,
            "Content-Type ": "multipart/form-data",
          },
        });
        console.log("h2");
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        console.log(ImgHash);
        setForm({ ...form, images: ImgHash });
        setFileName("Image Uploaded");
        return ImgHash;
      } catch (error) {
        alert("Unable to upload image to Pinata");
      }
    }
  };

  const retrieveFile = (event) => {
    const data = event.target.files[0];

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(event.target.files[0]);

      if (event.target.files && event.target.files[0]) {
        setDiplayImg(URL.createObjectURL(event.target.files[0]));
      }
    };

    event.preventDefault();
  };

  const { address, contract, getUserPropertiesFunction, getPropertiesData } =
    useStateContext();

  const fetchProperty = async () => {
    setIsLoading(true);
    const data = await getPropertiesData();
    console.log(data);
    console.log(propertyId);
    setForm({
      propertyTitle: data[propertyId].title,
      description: data[propertyId].description,
      category: data[propertyId].category,
      price: data[propertyId].price,
      images: data[propertyId].image,
      propertyAddress: data[propertyId].address,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperty();
  }, [contract]);

  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <CreateOne title="Update Property" />
      <div class="creat-collection-area pt--80">
        <div class="container">
          <div class="row g-5 ">
            <div class="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div class="collection-single-wized banner">
                <label class="title required">Logo image</label>

                <div class="create-collection-input logo-image">
                  <div class="logo-c-image logo">
                    <img
                      id="rbtinput1"
                      src={diplayImg || "/profile/profile-01.jpg"}
                      alt="Profile-NFT"
                    />
                    <label for="fatima" title="No File Choosen">
                      <span class="text-center color-white">
                        <i class="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div class="button-area">
                    <div class="brows-file-wrapper">
                      <input
                        name="fatima"
                        id="fatima"
                        type="file"
                        onChange={retrieveFile}
                      />
                    </div>
                  </div>
                </div>
                {file && (
                  <Link
                    href="#"
                    onClick={() => uploadToPinata()}
                    class="btn btn-primary-alta btn-large"
                  >
                    {fileName}
                  </Link>
                )}
              </div>
            </div>

            <div class="col-lg-7">
              <div class="create-collection-form-wrapper">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="collection-single-wized">
                      <label for="name" class="title required">
                        Property Title
                      </label>
                      <div class="create-collection-input">
                        <input
                          id="name"
                          class="name"
                          type="text"
                          required
                          placeholder={form.propertyTitle}
                          onChange={(e) =>
                            handleFormFieldChange("propertyTitle", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="collection-single-wized">
                      <label for="url" class="title">
                        Image
                      </label>
                      <div class="create-collection-input">
                        <input
                          id="url"
                          class="url"
                          type="text"
                          required
                          placeholder={form.images}
                          onChange={(e) => handleFormFieldChange("images", e)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-lg-12">
                    <div class="collection-single-wized">
                      <label class="title">Category</label>
                      <div class="create-collection-input">
                        <div class="nice-select mb--30" tabindex="0">
                          <span class="current">Add Category</span>
                          <ul class="list">
                            {categories.map((el, i) => (
                              <li
                                key={i + 1}
                                onClick={() =>
                                  setForm({
                                    ...form,
                                    category: el,
                                  })
                                }
                                data-value="Housing"
                                class="option"
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="collection-single-wized">
                      <label className="title">Category</label>
                      <div className="create-collection-input">
                        <select
                          className="form-select mb--30"
                          value={form.category}
                          onChange={(e) => handleFormFieldChange("category", e)}
                        >
                          <option value="">Select Category</option>
                          {categories.map((el, i) => (
                            <option key={i + 1} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label className="title">Category</label>
                      <div className="create-collection-input">
                        <select
                          className="form-select mb--30"
                          value={form.category}
                          onChange={(e) => handleFormFieldChange("category", e)}
                        >
                          <option value="">Select Category</option>
                          {categories.map((el, i) => (
                            <option key={i + 1} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div> */}
                  <div className="collection-single-wized">
                    <label className="title">Category</label>
                    <div className="create-collection-input">
                      <CustomDropdown
                        options={categories}
                        value={form.category}
                        onChange={(selectedCategory) =>
                          setForm({ ...form, category: selectedCategory })
                        }
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="collection-single-wized">
                      <label for="description" class="title">
                        Description
                      </label>
                      <div class="create-collection-input">
                        <textarea
                          id="description"
                          class="text-area"
                          placeholder={form.description}
                          onChange={(e) =>
                            handleFormFieldChange("description", e)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="collection-single-wized">
                      <label for="wallet" class="title">
                        Property Address
                      </label>
                      <div class="create-collection-input">
                        <input
                          id="wallet"
                          class="url"
                          type="text"
                          placeholder={form.propertyAddress}
                          onChange={(e) =>
                            handleFormFieldChange("propertyAddress", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    {/* <div class="BlockEstate-information mb--30">
                      <div class="single-notice-setting">
                        <div class="input">
                          <input
                            type="checkbox"
                            id="themeSwitch"
                            name="theme-switch"
                            class="theme-switch__input"
                          />
                          <label for="themeSwitch" class="theme-switch__label">
                            <span></span>
                          </label>
                        </div>
                        <div class="content-text">
                          <p>Explicit & sensitive content</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div class="col-lg-12">
                    <div class="button-wrapper">
                      <Link
                        href="#"
                        onClick={() => handleSubmit()}
                        class="btn btn-primary-alta btn-large"
                      >
                        {isLoading ? <Loader /> : "Update"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Update;
