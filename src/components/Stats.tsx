import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Stats = () => {
  const stats = [
    { number: 10, label: "проектов", sublabel: "на базе Gen AI, Computer Vision" },
    { number: 15, label: "лет в IT", sublabel: "и mobile-разработке" },
    { number: 300, label: "проектов", sublabel: "разного типа сложности" },
    { number: 20, label: "млн загрузок", sublabel: "в App Store и Google Play" },
  ];

  return (
    <section className="hero-section py-20 px-6 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-foreground/5 rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-1/2 -left-1/4 w-3/4 h-full bg-primary-foreground/5 rounded-full"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Digital-бутик uStrike
          </h2>
          <p className="text-xl text-primary-foreground/90 font-semibold">
            Надежный AI-партнер
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-start mb-12 max-w-3xl mx-auto"
        >
          <motion.span 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary-foreground mr-4"
          >
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
          </motion.span>
          <p className="text-lg text-primary-foreground/90">
            Мы экспертны ровно на столько, чтобы задать необходимое количество вопросов и самим предложить решение
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <AnimatedCounter target={stat.number} />
              <p className="text-primary-foreground font-medium mt-2">{stat.label}</p>
              <p className="text-primary-foreground/70 text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
