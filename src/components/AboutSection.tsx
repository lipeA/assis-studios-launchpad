import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5562999999999?text=Olá! Gostaria de saber mais sobre a Assis Studios.", "_blank");
  };

  return (
    <section id="quem-somos" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutTeam}
                alt="Equipe Assis Studios trabalhando em projetos digitais"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gradient-card glass p-6 rounded-xl shadow-glow"
            >
              <div className="text-4xl font-display font-bold text-gradient">+5</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Somos a <span className="text-gradient">Assis Studios</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Há mais de 5 anos, transformamos a presença digital de empresas em Goiânia, 
                Trindade-GO e região. Somos especialistas em criar soluções tecnológicas que 
                realmente fazem diferença nos resultados do seu negócio.
              </p>
              <p>
                Nossa equipe multidisciplinar combina criatividade, estratégia e expertise técnica 
                para desenvolver sites modernos, lojas virtuais de alta conversão, aplicativos 
                intuitivos e campanhas de marketing digital que geram resultados reais.
              </p>
              <p>
                Acreditamos que cada projeto é único. Por isso, trabalhamos lado a lado com 
                nossos clientes para entender suas necessidades e entregar soluções personalizadas 
                que superam expectativas.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <span className="font-medium">Projetos Personalizados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <span className="font-medium">Suporte Dedicado</span>
              </div>
            </div>

            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              Fale Conosco no WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
