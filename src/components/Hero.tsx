import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in">
            <span className="text-foreground">Сложные и нетиповые</span>
            <br />
            <span className="text-primary flex items-center gap-3">
              <ArrowRight className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0" />
              AI-решения и IT-проекты
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Разрабатываем интеллектуальные приложения и сервисы нового поколения для решения задач бизнеса
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="cta-button text-lg">
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
