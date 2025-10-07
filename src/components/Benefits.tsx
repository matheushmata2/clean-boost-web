import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Aumente seu faturamento em até 40%",
  "Reduza perdas com clientes esquecidos",
  "Profissionalize a imagem da sua empresa",
  "Tome decisões baseadas em dados reais",
  "Fidelize seus clientes com alertas automáticos",
  "Ganhe tempo eliminando processos manuais",
];

const Benefits = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Do pequeno ao grande,{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                crescimento garantido
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nossa missão é dar ao pequeno empreendedor aquele tom de empresa grande e profissional. Com nosso CRM, você compete de igual para igual com os grandes players do mercado.
            </p>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-lg italic text-foreground/90">
                "Com o sistema, consegui organizar meu negócio e aumentei meu faturamento em 35% no primeiro trimestre. Hoje me sinto uma empresa de verdade!"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                <div>
                  <div className="font-semibold">João Silva</div>
                  <div className="text-sm text-muted-foreground">Lava Car Premium</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-secondary/50 transition-colors duration-300 border border-border/50 hover:border-primary/30"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
