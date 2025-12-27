import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import OnlinePresenceSection from "@/components/OnlinePresenceSection";
import AppDevelopmentSection from "@/components/AppDevelopmentSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Assis Studios | Desenvolvimento de Sites, Apps e Marketing Digital em Goiânia e Trindade-GO</title>
        <meta 
          name="description" 
          content="Agência digital com +5 anos de experiência em Goiânia e Trindade-GO. Desenvolvimento de sites, lojas WooCommerce, aplicativos Android e iOS, SEO, Facebook Ads e Google Ads." 
        />
        <meta 
          name="keywords" 
          content="desenvolvimento de sites Goiânia, criação de aplicativos Trindade GO, agência digital Goiás, marketing digital, SEO, Google Ads, Facebook Ads, WooCommerce" 
        />
        <link rel="canonical" href="https://assisstudios.com.br" />
      </Helmet>
      
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <SolutionsSection />
        <OnlinePresenceSection />
        <AppDevelopmentSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
