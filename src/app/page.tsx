import React from "react";

import Layout from "@/components/layout/Layout";
import HeroSection from "./sections/HeroSection";
import SpecificationsSection from "./sections/SpecificationsSection";
import ProductOverviewSection from "./sections/ProductOverviewSection";
import GradesSizingSection from "./sections/GradesSizingSection";
import ApplicationsSection from "./sections/ApplicationsSection";
import ContactSection from "./sections/ContactSection";


const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductOverviewSection />
      <SpecificationsSection />
      <GradesSizingSection />
      <ApplicationsSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
