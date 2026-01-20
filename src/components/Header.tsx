import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">u</span>
          <span className="text-2xl font-bold text-foreground">Strike</span>
          <span className="text-xs text-muted-foreground ml-1">Digital-бутик</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link text-sm font-medium">О нас</a>
          <a href="#services" className="nav-link text-sm font-medium">Услуги</a>
          <a href="#projects" className="nav-link text-sm font-medium">Проекты</a>
          <a href="#contact" className="nav-link text-sm font-medium">Контакты</a>
        </nav>
        
        <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Обсудить проект
        </Button>
      </div>
    </header>
  );
};

export default Header;
