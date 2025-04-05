
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16 animate-fade-in">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Olá, eu sou</span>
                <br />
                <span className="text-resume-cyan">Douglas Lessat</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300">Desenvolvedor & Analista de Sistemas</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Atualmente cursando Análise de Sistemas na Unisales - Centro Universitário Salesiano. 
              Focado no desenvolvimento de soluções de software e integração de sistemas, com experiência 
              em tecnologias como Java, SQL, JavaScript e TypeScript.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-resume-cyan hover:bg-resume-cyan/80 text-black">
                  <Download size={18} className="mr-2" /> Download CV
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/douglaslessat/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-resume-cyan text-resume-cyan hover:bg-resume-cyan/10">
                  <Linkedin size={18} className="mr-2" /> LinkedIn
                </Button>
              </a>
              <a href="https://github.com/DouglasLessaT" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-resume-cyan text-resume-cyan hover:bg-resume-cyan/10">
                  <Github size={18} className="mr-2" /> GitHub
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-resume-cyan p-1">
                <img 
                  src="public/lovable-uploads/6729cc4b-1801-4709-9ce6-7ea845513b26.png" 
                  alt="Douglas Lessat" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-cyan-gradient opacity-30 blur-md -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
