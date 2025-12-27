import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: TrendingUp, value: "97%", label: "das buscas começam online" },
  { icon: Users, value: "70%", label: "confiam mais em empresas com site" },
  { icon: Clock, value: "24/7", label: "seu negócio disponível" },
  { icon: Shield, value: "3x", label: "mais credibilidade no mercado" },
];

const OnlinePresenceSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5562999999999?text=Olá! Quero saber como posso melhorar minha presença online.", "_blank");
  };

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-accent/20 rounded-full" />
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Por Que Estar Online?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Sua empresa está{" "}
              <span className="text-gradient">perdendo clientes</span>{" "}
              por não estar na internet?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Enquanto você lê isso, milhares de pessoas em Goiânia e Trindade estão 
              pesquisando por produtos e serviços como os seus. Se você não está online, 
              seus concorrentes estão capturando esses clientes.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gradient-card glass rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-display font-bold mb-4">
                Não deixe seu negócio para trás!
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Um site profissional não é mais um luxo, é uma necessidade. É seu vendedor 
                24 horas, sua vitrine para o mundo e a primeira impressão que muitos clientes 
                terão do seu negócio. Com mais de 5 anos de experiência, a Assis Studios 
                pode transformar sua presença digital e ajudar sua empresa a conquistar novos 
                clientes todos os dias.
              </p>
              <Button variant="hero" size="lg" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Quero Melhorar Minha Presença Online
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OnlinePresenceSection;
