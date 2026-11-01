import HeroSection from "@/components/HeroSection";
import CompanyProfile from "@/components/CompanyProfile";
import ServicesSection from "@/components/ServicesSection";
import CollectSection from "@/components/CollectSection";
import ProcessSection from "@/components/ProcessSection";
import ImpactSection from "@/components/ImpactSection";
import ComparisonTable from "@/components/ComparisonTable";
import RecognitionSection from "@/components/RecognitionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GettingStartedSection from "@/components/GettingStartedSection";
import CtaSection from "@/components/CtaSection";
import FooterContact from "@/components/FooterContact";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <CompanyProfile />
        <ServicesSection />
        <CollectSection />
        <ProcessSection />
        <ImpactSection />
        <ComparisonTable />
        <RecognitionSection />
        <TestimonialsSection />
        <GettingStartedSection />
        <CtaSection />
      </main>
      <FooterContact />
    </div>
  );
};

export default Index;
