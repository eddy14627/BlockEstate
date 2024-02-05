import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Link from "next/link";
//INTERNAL IMPORT
import { useStateContext } from "../../context";
import { checkIfImage } from "../../utils";

const CreateTwo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);
  const [fileName, setFileName] = useState("Upload Image");
  const [isUserVerified, setIsUserVerified] = useState(false);

  const {
    address,
    verificationRequestFunction,
    isUserVerified: checkUserVerified,
    // isUserVerified,
  } = useStateContext();

  // console.log("isUserVerified : ", isUserVerified);
  const [form, setForm] = useState({
    document: "",
  });

  const handleFormFieldChange = (fileName, e) => {
    setForm({ ...form, [fileName]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    checkIfImage(form.document, async (exists) => {
      if (exists) {
        await verificationRequestFunction({
          ...form,
          document: form.document,
        });
        setIsLoading(false);
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, document: "" });
        setIsLoading(false);
      }
    });
  };

  const uploadToPinata = async () => {
    setFileName("Image Uploading...");
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

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
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        console.log(ImgHash);
        setForm({ ...form, document: ImgHash });
        setFileName("Image Uploaded");
        return ImgHash;
      } catch (error) {
        alert("Unable to upload image to Pinata");
        return null;
      }
    }
    return null;
  };

  const retrieveFile = (event) => {
    const data = event.target.files[0];

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(event.target.files[0]);

      if (event.target.files && event.target.files[0]) {
        setImg(URL.createObjectURL(event.target.files[0]));
      }
    };

    event.preventDefault();
  };

  const fetchData = async () => {
    const flag = await checkUserVerified(address);
    setIsUserVerified(flag);
  };

  useEffect(() => {
    if (address) {
      fetchData();
    }
  }, [address]);

  return (
    <>
      <div className="creat-collection-area pt--80">
        <div className="container">
          <div className="row g-5 ">
            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div className="collection-single-wized banner">
                <label className="title required">Document</label>

                <div class="create-collection-input logo-image">
                  <div class="logo-c-image logo">
                    <img
                      id="rbtinput1"
                      src={img || "/profile/profile-01.jpg"}
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
                    className="btn btn-primary-alta btn-large"
                  >
                    <button>{fileName}</button>
                  </Link>
                )}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="create-collection-form-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="name" className="title required">
                        Wallet address
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="name"
                          className="name"
                          type="text"
                          readOnly // Set readOnly attribute
                          placeholder={address}
                          onChange={(e) =>
                            handleFormFieldChange("propertyTitle", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="url" className="title">
                        Document
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="url"
                          className="url"
                          type="text"
                          required
                          placeholder={fileName}
                          onChange={(e) => handleFormFieldChange("images", e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label htmlFor="description" className="title">
                        Status
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="description"
                          className="name"
                          type="text"
                          readOnly // Set readOnly attribute
                          placeholder={
                            isUserVerified ? "Verified" : "Not Verified"
                          }
                          onChange={(e) =>
                            handleFormFieldChange("propertyTitle", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="button-wrapper">
                      <Link
                        href="#"
                        onClick={() => handleSubmit()}
                        className="btn btn-primary-alta btn-large"
                      >
                        {isUserVerified ? "Verified" : "Request Verify"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTwo;
