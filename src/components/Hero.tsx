import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-car-wash.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Lava-rápido profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Sistema completo de gestão</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Transforme seu{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              lava-rápido
            </span>{" "}
            em uma empresa de{" "}
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              sucesso
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Sistema profissional de gestão para lava-rápidos. Controle total de clientes, veículos, agendamentos e muito mais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link to="/cadastro">
              <Button size="xl" variant="hero" className="group">
                Começar agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="xl" variant="heroOutline">
              Conhecer recursos
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-border/50 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Empresas ativas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50k+</div>
              <div className="text-sm text-muted-foreground">Veículos cadastrados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
