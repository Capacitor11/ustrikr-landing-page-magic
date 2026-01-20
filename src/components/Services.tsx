import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI-решения",
      description: "Разрабатываем AI-решения на базе GenerativeAI, ML, CV и NLP"
    },
    {
      title: "ИИ-ассистенты",
      description: "Чат-боты и голосовые умные помощники на данных и базе знаний вашей компании"
    },
    {
      title: "Компьютерное зрение",
      description: "Умное видеонаблюдение и контроль бизнес-процессов"
    },
    {
      title: "Мобильная разработка",
      description: "Проектируем и создаем нативные мобильные приложения для iOS и Android"
    },
    {
      title: "Цифровые экосистемы и супераппы",
      description: "Цифровизуем бизнес, разрабатываем корпоративные и информационные порталы, онлайн-сервисы, образовательные платформы, CRM и ERP-системы"
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
          <span className="text-foreground">Что мы</span>
          <br />
          <span className="text-primary flex items-center gap-3">
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
            делаем?
          </span>
        </h2>
        
        <div className="grid gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-3 gap-4 md:gap-8 py-6 border-b border-border last:border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="md:col-span-2 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
