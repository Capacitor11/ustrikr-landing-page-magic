const Footer = () => {
  return (
    <footer className="bg-card py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 120 40" 
              className="h-8 md:h-10"
              fill="none"
            >
              <text 
                x="0" 
                y="28" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                fontSize="32" 
                fontWeight="700" 
                fill="hsl(var(--primary))"
              >
                u
              </text>
              <text 
                x="20" 
                y="28" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                fontSize="32" 
                fontWeight="700" 
                fill="hsl(var(--foreground))"
              >
                Strike
              </text>
            </svg>
            <span className="text-xs text-muted-foreground ml-1">Digital-бутик</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="#hero" className="nav-link text-sm">О нас</a>
            <a href="#services" className="nav-link text-sm">Услуги</a>
            <a href="#projects" className="nav-link text-sm">Проекты</a>
            <a href="#contact" className="nav-link text-sm">Контакты</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2026 uStrike. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
