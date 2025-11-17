import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient border-border">
            <CardContent className="p-8">
              <p className="text-center text-lg mb-8">
                I'm currently looking for new opportunities! Whether you have a question or just want to say hi, 
                feel free to reach out. I'll try my best to get back to you!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:chandramoulimanepalli2002@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary-foreground/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground group-hover:text-current">
                      chandramoulimanepalli2002@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+916302333014"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary-foreground/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground group-hover:text-current">+91 6302333014</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Vizianagaram, Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/chandramoulimanepalli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/chandramouli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Social</p>
                    <p className="text-sm text-muted-foreground">Connect with me</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="glow-effect hover:scale-105 transition-transform"
                >
                  <a href="mailto:chandramoulimanepalli2002@gmail.com">
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
