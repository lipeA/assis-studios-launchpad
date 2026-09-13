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
        <title>Assis Studios | Desenvolvedor Full-Stack em Trindade-GO e Goiânia | Sites e Apps Android/iPhone</title>
        <meta
          name="description"
          content="Desenvolvedor full-stack com +5 anos de experiência em Trindade-GO e Goiânia. Criação de sites, lojas virtuais WooCommerce, aplicativos nativos Android e iPhone, SEO, Google Ads e Facebook Ads."
        />
        <meta
          name="keywords"
          content="desenvolvedor full-stack, desenvolvedor full-stack Trindade GO, desenvolvedor full-stack Goiânia, desenvolvimento de sites Goiânia, criação de sites Trindade GO, criação de aplicativos Android, criação de aplicativos iPhone, desenvolvimento de apps iOS, programador freelancer Goiás, agência digital Goiás, loja virtual WooCommerce, e-commerce Goiânia, landing page, marketing digital, SEO, Google Ads, Facebook Ads"
        />
        <link rel="canonical" href="https://www.assisstudios.com.br/" />

        <meta property="og:title" content="Assis Studios | Desenvolvedor Full-Stack em Trindade-GO e Goiânia" />
        <meta
          property="og:description"
          content="Criação de sites, lojas virtuais e aplicativos nativos Android e iPhone. Desenvolvedor full-stack atendendo Trindade-GO, Goiânia e todo o Brasil."
        />
        <meta property="og:url" content="https://www.assisstudios.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Assis Studios" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://www.assisstudios.com.br/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Assis Studios | Desenvolvedor Full-Stack em Trindade-GO e Goiânia" />
        <meta
          name="twitter:description"
          content="Criação de sites, lojas virtuais e aplicativos nativos Android e iPhone em Trindade-GO e Goiânia."
        />
        <meta name="twitter:image" content="https://www.assisstudios.com.br/og-image.jpg" />
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
