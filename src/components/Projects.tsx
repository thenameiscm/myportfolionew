import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Image to Text using AI and ML",
      period: "Jan - May 2024",
      type: "Academic Project",
      description: "Developed an end-to-end OCR application using Python, OpenCV, Tesseract OCR, and EasyOCR for extracting text from scanned documents and multi-format images.",
      highlights: [
        "Improved text recognition accuracy by 20% through image preprocessing algorithms",
        "Designed modular, reusable code architecture for integration into multiple applications",
        "Implemented advanced image processing techniques for better text extraction",
      ],
      technologies: ["Python", "OpenCV", "Tesseract", "EasyOCR", "Machine Learning"],
    },
    {
      title: "ATM Machine Model",
      period: "Jan 2025",
      type: "Personal Project",
      description: "Designed and implemented a console-based banking simulation with secure authentication, withdrawals, deposits, and mini-statement generation.",
      highlights: [
        "Applied OOP principles to build modular components for account management",
        "Integrated exception handling and input validation to reduce runtime failures",
        "Improved system reliability through comprehensive error-control mechanisms",
      ],
      technologies: ["Java", "OOP", "Exception Handling", "File Handling"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-gradient border-border hover:border-primary/50 transition-all hover:scale-105 hover:glow-effect group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
