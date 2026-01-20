import { ArrowRight, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary flex items-center gap-3 mb-2">
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
                </motion.span>
                Давайте мы возьмем на себя
              </span>
              <span className="text-foreground">
                всю заботу по реализации вашего IT-проекта или AI-решения
              </span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-accent" />
              Команда из 50+ GenAI экспертов уже готова к этому!
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="cta-button text-lg">
                Обсудить проект
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full scale-110" />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-64 h-80 bg-secondary rounded-2xl relative overflow-hidden"
              >
                {/* Animated pattern */}
                <div className="absolute inset-0 opacity-50" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.2) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }} />
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="absolute bottom-0 left-0 right-0 bg-primary rounded-xl p-5 mx-4 -mb-4 shadow-2xl glass-card bg-primary/95"
              >
                <h3 className="text-primary-foreground font-bold text-lg mb-1">
                  Иван Кардашов
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-3">
                  co-founder uStrike, серийный технологический предприниматель
                </p>
                <div className="flex items-center justify-between">
                  <a href="tel:+79139543532" className="text-primary-foreground font-medium hover:underline">
                    +7 913 954 35 32
                  </a>
                  <div className="flex gap-2">
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://t.me/ustrike" 
                      className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Send className="w-5 h-5 text-primary-foreground" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://wa.me/79139543532" 
                      className="w-10 h-10 bg-success rounded-full flex items-center justify-center hover:bg-success/90 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-success-foreground" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
