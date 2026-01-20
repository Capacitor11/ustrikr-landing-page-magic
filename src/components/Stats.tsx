const Stats = () => {
  const stats = [
    { number: "10", label: "проектов", sublabel: "на базе Gen AI, Computer Vision" },
    { number: "15", label: "лет в IT", sublabel: "и mobile-разработке" },
    { number: "300", label: "проектов", sublabel: "разного типа сложности" },
    { number: "20", label: "млн загрузок", sublabel: "в App Store и Google Play" },
  ];

  return (
    <section className="hero-section py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Digital-бутик uStrike
          </h2>
          <p className="text-xl text-primary-foreground/90 font-semibold">
            Надежный AI-партнер
          </p>
        </div>
        
        <div className="flex items-start mb-12 max-w-3xl mx-auto">
          <span className="text-primary-foreground text-4xl mr-4">→</span>
          <p className="text-lg text-primary-foreground/90">
            Мы экспертны ровно на столько, чтобы задать необходимое количество вопросов и самим предложить решение
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number text-primary-foreground">
                {stat.number}
                <span className="stat-plus text-primary-foreground/70">+</span>
              </div>
              <p className="text-primary-foreground font-medium mt-2">{stat.label}</p>
              <p className="text-primary-foreground/70 text-sm">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
