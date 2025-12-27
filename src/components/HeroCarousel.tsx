import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: heroBanner1,
    title: "Transformamos Ideias em",
    highlight: "Soluções Digitais",
    subtitle: "Desenvolvimento de sites, aplicativos e estratégias de marketing digital que impulsionam seu negócio em Goiânia e Trindade-GO.",
  },
  {
    image: heroBanner2,
    title: "Seu Negócio no",
    highlight: "Mundo Digital",
    subtitle: "Sites, lojas virtuais, apps e campanhas de performance. Mais de 5 anos transformando empresas com tecnologia.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleWhatsApp = () => {
    window.open("https://wa.me/5562084111513?text=Olá! Gostaria de saber mais sobre os serviços da Assis Studios.", "_blank");
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-glow" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container-section h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-6">
              +5 anos de experiência em Goiânia e Trindade-GO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
              {slides[currentSlide].title}{" "}
              <span className="text-gradient">{slides[currentSlide].highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleWhatsApp}>
                Fale Conosco
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#solucoes">Nossas Soluções</a>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
        <Button
          variant="glass"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto rounded-full"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="glass"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto rounded-full"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroCarousel;
