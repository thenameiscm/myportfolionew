const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="card-gradient rounded-lg p-8 border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I'm a highly motivated B.Tech Computer Science graduate with a passion for creating 
              elegant solutions to complex problems. My journey in software development has equipped 
              me with strong skills in both frontend and backend technologies.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              With expertise in <span className="text-primary font-semibold">Java</span>, <span className="text-primary font-semibold">React.js</span>, 
              and <span className="text-primary font-semibold">SQL</span>, I focus on building responsive, 
              user-friendly applications that make a difference. My analytical thinking and problem-solving 
              abilities allow me to tackle challenging projects with confidence.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I'm seeking opportunities to contribute to high-quality software development while 
              continuing to learn and grow as an IT professional. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
