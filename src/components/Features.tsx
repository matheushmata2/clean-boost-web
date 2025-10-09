import { Card, CardContent } from "@/components/ui/card";
import { Bell, BarChart3, Users, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestão Completa de Clientes",
    description: "Cadastro detalhado de clientes e veículos. Histórico completo de serviços e preferências.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Sistema de notificações automáticas para retorno de clientes e manutenções preventivas.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Análises",
    description: "Dashboards completos com métricas de performance, faturamento e produtividade.",
  },
  {
    icon: FileText,
    title: "Controle Financeiro",
    description: "Gestão completa de pagamentos, recebimentos e fluxo de caixa.",
  },
  {
    icon: Shield,
    title: "Segurança e Backup",
    description: "Seus dados protegidos com backup automático e criptografia de ponta.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tudo que você precisa em{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              um só lugar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sistema completo de gestão desenvolvido especialmente para lava-rápidos profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                <Card className="relative h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full" />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
