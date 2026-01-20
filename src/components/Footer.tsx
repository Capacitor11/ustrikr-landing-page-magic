const Footer = () => {
  return (
    <footer className="bg-card py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">u</span>
            <span className="text-2xl font-bold text-foreground">Strike</span>
            <span className="text-xs text-muted-foreground ml-1">Digital-бутик</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="#about" className="nav-link text-sm">О нас</a>
            <a href="#services" className="nav-link text-sm">Услуги</a>
            <a href="#projects" className="nav-link text-sm">Проекты</a>
            <a href="#contact" className="nav-link text-sm">Контакты</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2024 uStrike. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
