import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      logo: "PART.A",
      title: "Разработка инновационного генератора контента с использованием AI-технологий",
      details: [
        "разработка и запуск образовательного стартапа: технология создания образовательного контента по точным предметам",
        "адаптация методологии и core-технологии на базе российского физ-мата, для рынков Казахстана и Бразилии"
      ],
      tags: ["AI", "Startup", "EdTech"]
    },
    {
      logo: "ЕМИАС",
      title: "Разработка мобильного приложения, отслеживающего в реальном времени показатели пользователя",
      details: [
        "за 1 месяц разработали приложение для iOS и Android",
        "команда: 2 разработчика, QA и менеджер"
      ],
      tags: ["AI", "Mobile", "HealthTech"]
    },
    {
      logo: "СМС Финанс",
      title: "В течение 5 лет были технологическим партнером и единственным центром разработки",
      details: [
        "формирование IT-команды ~40 человек",
        "разработка и интеграция всех модулей бизнеса с последующим поддержанием SLA"
      ],
      tags: ["AI", "Mobile", "FinTech"]
    },
    {
      logo: "SimonsVoss",
      title: "Разработка нового продукта в b2c сегменте для компании, входящей в ТОП-10",
      details: [
        "за 5 месяцев разработали с нуля, интегрировали в систему заказчика и выпустили на рынок web и мобильные приложения",
        "5+ лет осуществляем поддержку и доработку продуктов"
      ],
      tags: ["Mobile", "Web", "IoT"]
    },
    {
      logo: "МТС Банк",
      title: "Разработали концепт digital-решений банка, подразумевающий объединение приложений",
      details: [
        "в условиях быстрого старта собрали команду из 6 человек",
        "релиз первой версии состоялся через 2 месяца"
      ],
      tags: ["Mobile", "UX/UI", "FinTech"]
    },
    {
      logo: "Совкомбанк",
      title: "Разработка всех внутренних мобильных продуктов Совкомбанка",
      details: [
        "сформировали выделенную команду из 15 человек",
        "через продукты проходит более 30% новых клиентов"
      ],
      tags: ["Mobile", "UX/UI", "FinTech"]
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Наши</span>
              <br />
              <span className="text-primary flex items-center gap-3">
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
                проекты
              </span>
            </h2>
            <p className="text-muted-foreground">
              За 15 лет работы создали более 300 проектов. Здесь мы показываем только самые интересные
            </p>
          </div>
          
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(2).map((project, index) => (
            <ProjectCard key={index + 2} project={project} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  logo: string;
  title: string;
  details: string[];
  tags: string[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div 
      className="project-card animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-lg font-bold text-muted-foreground mb-4">{project.logo}</div>
      <h3 className="text-lg font-semibold text-foreground mb-4">{project.title}</h3>
      <ul className="space-y-2 mb-6">
        {project.details.map((detail, i) => (
          <li key={i} className="text-sm text-muted-foreground">{detail}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag-badge">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
