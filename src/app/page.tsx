import React from "react";

import Layout from "@/components/layout/Layout";
import HeroSection from "./sections/HeroSection";
import SpecificationsSection from "./sections/SpecificationsSection";
import ProductOverviewSection from "./sections/ProductOverviewSection";
import GradesSizingSection from "./sections/GradesSizingSection";
import ApplicationsSection from "./sections/ApplicationsSection";
import ContactSection from "./sections/ContactSection";

export const metadata = {
  title: "Fresh Ginger – Commercial Raw Material Supply",
  description:
    "Kalisloka provides fresh ginger supply with standardized grades, specifications, and applications for export and industrial markets.",
};

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <ProductOverviewSection />
        <SpecificationsSection />
        <GradesSizingSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
    </Layout>
  );
};

export default HomePage;
