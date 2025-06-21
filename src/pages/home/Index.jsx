import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Skills } from "../../components/Skills";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";
import "./styles.css";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Top-Rated Beauty Parlour in Madurai | Princess Celestia</title>
        <meta
          name="description"
          content="Looking for the best beauty parlour in Madurai? Princess Celestia offers expert bridal makeup, skincare, and hair styling."
        />
        <meta name="author" content="Princess Celestia" />
        
        <meta
          property="og:title"
          content="Princess Celestia - Beauty Parlour in Madurai"
        />
        <meta
          property="og:description"
          content="Explore premium beauty services in Madurai including bridal makeup, facials, and more at Princess Celestia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content=" " />
        <meta property="og:url" content=" " />
        <link rel="canonical" href=" " />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
