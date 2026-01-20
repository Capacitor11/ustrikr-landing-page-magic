import { ArrowRight, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary flex items-center gap-3 mb-2">
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
                Давайте мы возьмем на себя
              </span>
              <span className="text-foreground">
                всю заботу по реализации вашего IT-проекта или AI-решения
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Команда из 50+ GenAI экспертов уже готова к этому!
            </p>
            
            <Button className="cta-button text-lg">
              Обсудить проект
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-80 bg-secondary rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-xl p-5 mx-4 -mb-4 shadow-lg">
                <h3 className="text-primary-foreground font-bold text-lg mb-1">
                  Иван Кардашов
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-3">
                  co-founder uStrike, серийный технологический предприниматель
                </p>
                <div className="flex items-center justify-between">
                  <a href="tel:+79139543532" className="text-primary-foreground font-medium">
                    +7 913 954 35 32
                  </a>
                  <div className="flex gap-2">
                    <a 
                      href="https://t.me/ustrike" 
                      className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Send className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a 
                      href="https://wa.me/79139543532" 
                      className="w-10 h-10 bg-success rounded-full flex items-center justify-center hover:bg-success/90 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-success-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
