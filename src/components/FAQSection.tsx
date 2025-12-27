import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqSupport from "@/assets/faq-support.jpg";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "O prazo varia conforme a complexidade do projeto. Sites institucionais geralmente ficam prontos em 2 a 4 semanas, enquanto lojas virtuais e sistemas mais complexos podem levar de 4 a 8 semanas. Trabalhamos com cronogramas definidos e mantemos você informado em cada etapa.",
  },
  {
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer: "Sim! Oferecemos suporte técnico contínuo e planos de manutenção para garantir que seu site ou aplicativo esteja sempre atualizado, seguro e funcionando perfeitamente. Estamos sempre disponíveis para ajudar.",
  },
  {
    question: "Qual o investimento para criar um site ou aplicativo?",
    answer: "Cada projeto é único, por isso trabalhamos com orçamentos personalizados. Entre em contato conosco pelo WhatsApp para uma análise gratuita das suas necessidades. Temos soluções para diferentes portes de empresa.",
  },
  {
    question: "O site será responsivo e otimizado para celular?",
    answer: "Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em qualquer dispositivo - computadores, tablets e smartphones. Além disso, otimizamos para SEO e performance.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo é transparente e colaborativo. Começamos com uma reunião para entender suas necessidades, criamos um escopo detalhado, desenvolvemos o projeto com aprovações em cada etapa, e finalizamos com testes rigorosos antes da entrega.",
  },
  {
    question: "Vocês trabalham com clientes de outras cidades?",
    answer: "Sim! Embora estejamos localizados em Trindade-GO e atendemos principalmente Goiânia e região, trabalhamos com clientes de todo o Brasil. Utilizamos ferramentas de comunicação online para manter contato próximo e eficiente.",
  },
];

const FAQSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5562984111513?text=Olá! Tenho uma dúvida sobre os serviços da Assis Studios.", "_blank");
  };

  return (
    <section id="faq" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
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
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Perguntas{" "}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços. Se não encontrar o que procura, 
            entre em contato conosco.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={faqSupport}
                  alt="Suporte ao cliente Assis Studios"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-display font-bold mb-2">
                    Ainda tem dúvidas?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Nossa equipe está pronta para ajudar você!
                  </p>
                  <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                    <MessageCircle className="h-5 w-5" />
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-8 text-center">
              <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
