import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-[var(--gradient-hero)] text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Junte-se a centenas de empresários que já revolucionaram seus lava-rápidos com nosso sistema profissional.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="pl-10 h-14 bg-background/95 backdrop-blur-sm border-white/20 focus:border-white text-foreground"
              />
            </div>
            <Button size="lg" variant="hero" className="h-14 bg-accent hover:bg-accent/90">
              Começar grátis
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <p className="text-sm opacity-75">
          Teste grátis por 14 dias • Não precisa cartão de crédito • Suporte em português
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">14 dias</div>
            <div className="text-sm opacity-75">Teste grátis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">5 min</div>
            <div className="text-sm opacity-75">Para começar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-sm opacity-75">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
