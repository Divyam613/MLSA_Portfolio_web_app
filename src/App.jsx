/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Divyam Sharma",
  title: "Software Developer and web Developer",
  email: "divyamsharma613@gmail.com",
  gitHub: "https://github.com/Divyam613",
  instagram: "https://www.instagram.com/sharma_ji_divyam",
  linkedIn: "Https://www.linkedin.com/in/divyam-sharma-107b5a25a",
  medium: "",
  twitter: "https://twitter.com/Divyam613?t=Bk0fri86zdOY7NNptZIrrA&s=09",
  youTube: "https://www.youtube.com/channel/UClfgRGF1AoSL2RtX5QSujPQ",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
