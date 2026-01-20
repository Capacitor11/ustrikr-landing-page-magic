import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden bg-background">
      {/* Animated floating blobs */}
      <div className="floating-blob w-[600px] h-[600px] bg-primary/10 -top-40 -right-40" style={{ animationDelay: '0s' }} />
      <div className="floating-blob w-[500px] h-[500px] bg-violet-medium/10 top-1/2 -left-60" style={{ animationDelay: '-5s' }} />
      <div className="floating-blob w-[400px] h-[400px] bg-accent/10 bottom-20 right-1/4" style={{ animationDelay: '-10s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            <span className="text-foreground">Сложные и нетиповые</span>
            <br />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-primary flex items-center gap-3 glow-text"
            >
              <motion.span
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0" />
              </motion.span>
              AI-решения и IT-проекты
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Разрабатываем интеллектуальные приложения и сервисы нового поколения для решения задач бизнеса
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button className="cta-button text-lg">
              Обсудить проект
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
    </section>
  );
};

export default Hero;
