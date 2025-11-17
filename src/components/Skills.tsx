import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, MessageSquare, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java", "JavaScript (ES6+)", "Python"],
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL", "MySQL", "Database Management", "CRUD Operations"],
    },
    {
      icon: Settings,
      title: "Operating Systems",
      skills: ["Windows", "macOS", "Developer Tools"],
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Time Management", "Communication"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-gradient rounded-lg p-6 border border-border hover:border-primary/50 transition-all hover:scale-105 hover:glow-effect"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
