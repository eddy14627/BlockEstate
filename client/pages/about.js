import React from "react";
import Link from "next/link";
//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../PageComponents/Components";
import { Banner, Action, Quote, Statistick } from "../PageComponents/AboutPage";

const About = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <Banner />
      <Action />
      <Quote />
      <Statistick />
      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
