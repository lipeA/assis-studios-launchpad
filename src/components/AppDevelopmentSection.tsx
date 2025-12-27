import { motion } from "framer-motion";
import { Smartphone, Bell, Zap, Lock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";

const features = [
  {
    icon: Smartphone,
    title: "Experiência Nativa",
    description: "Apps com design intuitivo que seus clientes vão adorar usar.",
  },
  {
    icon: Bell,
    title: "Notificações Push",
    description: "Mantenha seus clientes engajados com mensagens personalizadas.",
  },
  {
    icon: Zap,
    title: "Performance Superior",
    description: "Apps rápidos e fluidos que funcionam mesmo offline.",
  },
  {
    icon: Lock,
    title: "Segurança Total",
    description: "Proteção de dados e transações seguras para seus usuários.",
  },
];

const AppDevelopmentSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5562984111513?text=Olá! Tenho interesse em desenvolver um aplicativo.", "_blank");
  };

  return (
    <section id="aplicativos" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Desenvolvimento de Apps
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Tenha seu próprio{" "}
              <span className="text-gradient">aplicativo mobile</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Um aplicativo coloca sua empresa literalmente na palma da mão dos seus clientes. 
              Desenvolvemos apps nativos para Android e iOS que aumentam o engajamento, 
              fidelizam clientes e criam novas oportunidades de receita.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              Quero Desenvolver Meu App
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 scale-90" />
              <img
                src={appMockup}
                alt="Mockup de aplicativo mobile desenvolvido pela Assis Studios"
                className="relative rounded-3xl shadow-card w-full max-w-md mx-auto animate-float"
              />
            </div>
            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute top-10 -left-4 lg:-left-8 glass rounded-xl p-4 shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Android & iOS</div>
                  <div className="text-xs text-muted-foreground">Apps Nativos</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute bottom-20 -right-4 lg:-right-8 glass rounded-xl p-4 shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-lg">🚀</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Alta Performance</div>
                  <div className="text-xs text-muted-foreground">Tecnologia Moderna</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentSection;
