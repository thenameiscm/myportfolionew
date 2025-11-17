import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="bg-secondary/30 py-8 text-center">
        <p className="text-muted-foreground">
          © 2025 Chandra Mouli Manepalli. Built with passion and code.
        </p>
      </footer>
    </div>
  );
};

export default Index;
