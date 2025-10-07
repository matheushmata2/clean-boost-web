import { Card, CardContent } from "@/components/ui/card";
import { Bell, BarChart3, Users, Calendar, FileText, Shield } from "lucide-react";
import featureCrm from "@/assets/feature-crm.jpg";
import featureAlerts from "@/assets/feature-alerts.jpg";
import featureAnalytics from "@/assets/feature-analytics.jpg";

const features = [
  {
    icon: Users,
    title: "Gestão Completa de Clientes",
    description: "Cadastro detalhado de clientes e veículos. Histórico completo de serviços e preferências.",
    image: featureCrm,
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Sistema de notificações automáticas para retorno de clientes e manutenções preventivas.",
    image: featureAlerts,
  },
  {
    icon: BarChart3,
    title: "Relatórios e Análises",
    description: "Dashboards completos com métricas de performance, faturamento e produtividade.",
    image: featureAnalytics,
  },
  {
    icon: Calendar,
    title: "Agendamento Online",
    description: "Sistema de agendamento integrado para otimizar o fluxo de atendimento.",
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
    <section className="py-24 px-4 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo que você precisa em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              um só lugar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sistema completo de gestão desenvolvido especialmente para lava-rápidos profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
              >
                <CardContent className="p-6">
                  {feature.image && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-secondary/50">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
