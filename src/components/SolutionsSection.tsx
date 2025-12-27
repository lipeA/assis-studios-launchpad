import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone, Search, Facebook, BarChart3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    description: "Sites institucionais, landing pages e portais modernos com design responsivo, otimizados para SEO e com alta performance.",
    features: ["Design Responsivo", "SEO Otimizado", "Carregamento Rápido"],
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais WooCommerce",
    description: "E-commerces completos com WooCommerce, integração com meios de pagamento e gestão simplificada de produtos e pedidos.",
    features: ["Integração PIX", "Gestão de Estoque", "Multi-vendedores"],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos para Android e iOS com interfaces intuitivas, notificações push e integração com sistemas externos.",
    features: ["Android & iOS", "Notificações Push", "APIs Integradas"],
  },
  {
    icon: Search,
    title: "SEO - Otimização",
    description: "Estratégias de SEO para posicionar seu site nas primeiras páginas do Google e aumentar o tráfego orgânico.",
    features: ["Análise de Keywords", "Link Building", "SEO Técnico"],
  },
  {
    icon: Facebook,
    title: "Facebook Ads",
    description: "Campanhas de anúncios no Facebook e Instagram para alcançar seu público-alvo e gerar leads qualificados.",
    features: ["Segmentação Avançada", "Remarketing", "Relatórios Detalhados"],
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    description: "Campanhas de Google Ads com foco em conversão, otimização contínua e maximização do ROI.",
    features: ["Search & Display", "YouTube Ads", "Performance Max"],
  },
];

const SolutionsSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5562984111513?text=Olá! Gostaria de um orçamento para os serviços da Assis Studios.", "_blank");
  };

  return (
    <section id="solucoes" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">crescer online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos soluções completas em desenvolvimento e marketing digital 
            para empresas de Goiânia, Trindade-GO e todo o Brasil.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-card glass rounded-2xl p-6 lg:p-8 hover:shadow-glow transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="whatsapp" size="xl" onClick={handleWhatsApp}>
            <MessageCircle className="h-5 w-5" />
            Solicitar Orçamento Gratuito
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
