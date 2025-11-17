import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Internship */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>
            
            <div className="card-gradient rounded-lg p-6 border border-border hover:border-primary/50 transition-all">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold">Web Developer</h3>
                <span className="text-sm text-muted-foreground">• Aug 2025</span>
              </div>
              <p className="text-primary mb-4">Hyderabad, Telangana</p>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Assisted in developing web applications using HTML, CSS, and JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Gained hands-on experience in React.js and Angular.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Collaborated with senior developers to understand real-world project workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Improved problem-solving, debugging, and teamwork skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-primary-foreground" />
            </div>
            
            <div className="space-y-4">
              <div className="card-gradient rounded-lg p-6 border border-border hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold mb-1">Bachelor of Technology - Computer Science</h3>
                <p className="text-primary mb-2">Avanthi Institute of Engineering and Technology</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>2021 - 2024</span>
                  <span>•</span>
                  <span>CGPA: 7.53</span>
                  <span>•</span>
                  <span>Vizianagaram, India</span>
                </div>
              </div>

              <div className="card-gradient rounded-lg p-6 border border-border hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold mb-1">Polytechnic - Electrical & Electronics Engineering</h3>
                <p className="text-primary mb-2">M.R.A.G.R Govt Polytechnic</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>2017 - 2020</span>
                  <span>•</span>
                  <span>CGPA: 7.44</span>
                  <span>•</span>
                  <span>Vizianagaram, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Award className="w-3 h-3 text-primary-foreground" />
            </div>
            
            <div className="card-gradient rounded-lg p-6 border border-border hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <div>
                    <p className="font-semibold">Advanced Diploma in Programming</p>
                    <p className="text-sm text-muted-foreground">April 2025</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <div>
                    <p className="font-semibold">Full Stack Web Development</p>
                    <p className="text-sm text-muted-foreground">July 2023</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <div>
                    <p className="font-semibold">Salesforce Developer Virtual Internship</p>
                    <p className="text-sm text-muted-foreground">AICTE – SmartInternz • November 2022</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
