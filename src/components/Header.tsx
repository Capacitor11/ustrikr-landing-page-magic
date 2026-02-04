import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scrollToSection";

const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const navItems = [
    { label: "О нас", sectionId: "hero" },
    { label: "Услуги", sectionId: "services" },
    { label: "Проекты", sectionId: "projects" },
    { label: "Контакты", sectionId: "contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
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
          <span className="text-xs text-muted-foreground ml-1 hidden sm:block">Digital-бутик</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a 
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              href={`#${item.sectionId}`}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className="nav-link text-sm font-medium cursor-pointer"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
            <a href="https://t.me/kardashov" target="_blank" rel="noopener noreferrer">
              Обсудить проект
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
