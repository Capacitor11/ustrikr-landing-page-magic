import { ArrowRight, Brain, Bot, Eye, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-решения",
      description: "Разрабатываем AI-решения на базе GenerativeAI, ML, CV и NLP"
    },
    {
      icon: Bot,
      title: "ИИ-ассистенты",
      description: "Чат-боты и голосовые умные помощники на данных и базе знаний вашей компании"
    },
    {
      icon: Eye,
      title: "Компьютерное зрение",
      description: "Умное видеонаблюдение и контроль бизнес-процессов"
    },
    {
      icon: Smartphone,
      title: "Мобильная разработка",
      description: "Проектируем и создаем нативные мобильные приложения для iOS и Android"
    },
    {
      icon: Globe,
      title: "Цифровые экосистемы и супераппы",
      description: "Цифровизуем бизнес, разрабатываем корпоративные и информационные порталы, онлайн-сервисы, образовательные платформы, CRM и ERP-системы"
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-muted relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16"
        >
          <span className="text-foreground">Что мы</span>
          <br />
          <span className="text-primary flex items-center gap-3">
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
            </motion.span>
            делаем?
          </span>
        </motion.h2>
        
        <div className="grid gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10, backgroundColor: "hsl(var(--background))" }}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 px-6 rounded-xl border border-transparent hover:border-border transition-all duration-300 group cursor-pointer"
            >
              <div className="md:col-span-1 flex items-start">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
              <h3 className="md:col-span-3 text-xl font-semibold text-foreground flex items-center">{service.title}</h3>
              <p className="md:col-span-8 text-muted-foreground flex items-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
