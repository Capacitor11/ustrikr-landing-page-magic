import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
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
        >
          <span className="text-2xl font-bold text-primary">u</span>
          <span className="text-2xl font-bold text-foreground">Strike</span>
          <span className="text-xs text-muted-foreground ml-1 hidden sm:block">Digital-бутик</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {["О нас", "Услуги", "Проекты", "Контакты"].map((item, i) => (
            <motion.a 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              href={`#${item === "О нас" ? "about" : item === "Услуги" ? "services" : item === "Проекты" ? "projects" : "contact"}`} 
              className="nav-link text-sm font-medium"
            >
              {item}
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
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
            Обсудить проект
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
