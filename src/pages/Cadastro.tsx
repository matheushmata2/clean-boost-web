import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const cadastroSchema = z.object({
  nome_empresa: z.string().trim().min(1, "Nome da empresa é obrigatório").max(100),
  cnpj: z.string().trim().min(14, "CNPJ inválido").max(18),
  email: z.string().trim().email("Email inválido").max(255),
  valor_da_renda: z.string().min(1, "Valor da renda é obrigatório"),
  celular: z.string().trim().min(10, "Celular inválido").max(15),
  logradouro: z.string().trim().min(1, "Logradouro é obrigatório").max(200),
  numero_do_endereco: z.string().trim().min(1, "Número é obrigatório").max(10),
  cep: z.string().trim().min(8, "CEP inválido").max(9),
  tipo_empresa: z.enum(["S", "M", "L"], { required_error: "Selecione o tipo de empresa" }),
  data_de_nascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  nome_dono: z.string().trim().min(1, "Nome do proprietário é obrigatório").max(100),
  assas: z.boolean().default(false),
});

type CadastroForm = z.infer<typeof cadastroSchema>;

const Cadastro = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      nome_empresa: "",
      cnpj: "",
      email: "",
      valor_da_renda: "",
      celular: "",
      logradouro: "",
      numero_do_endereco: "",
      cep: "",
      nome_dono: "",
      assas: false,
    },
  });

  const onSubmit = async (data: CadastroForm) => {
    setIsLoading(true);
    
    const payload = {
      ...data,
      valor_da_renda: Number(data.valor_da_renda),
      visualizacao_fila: "Etapa",
    };
    
    try {
      const response = await fetch("https://api.clicklava.com.br/empresa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao realizar cadastro");
      }

      toast.success("Cadastro realizado com sucesso!");
      form.reset();
    } catch (error) {
      toast.error("Erro ao realizar cadastro. Tente novamente.");
      console.error("Erro:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para home
        </Link>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
          <CardHeader className="space-y-1 pb-8">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comece grátis agora
            </CardTitle>
            <CardDescription className="text-base">
              Preencha os dados abaixo para criar sua conta no ClickLava
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Dados da Empresa */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Dados da Empresa</h3>
                  
                  <FormField
                    control={form.control}
                    name="nome_empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Minha Empresa Ltda" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="cnpj"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CNPJ</FormLabel>
                          <FormControl>
                            <Input placeholder="00.000.000/0000-00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tipo_empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Empresa</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="S">Pequeno Porte</SelectItem>
                              <SelectItem value="M">Médio Porte</SelectItem>
                              <SelectItem value="L">Grande Porte</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="valor_da_renda"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Faturamento Mensal (R$)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="10000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Dados do Proprietário */}
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="text-lg font-semibold text-foreground">Dados do Proprietário</h3>
                  
                  <FormField
                    control={form.control}
                    name="nome_dono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="João da Silva" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="data_de_nascimento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de Nascimento</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="celular"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Celular</FormLabel>
                          <FormControl>
                            <Input placeholder="(11) 99999-9999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@exemplo.com.br" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Endereço */}
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="text-lg font-semibold text-foreground">Endereço</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="cep"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CEP</FormLabel>
                          <FormControl>
                            <Input placeholder="00000-000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="logradouro"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Logradouro</FormLabel>
                          <FormControl>
                            <Input placeholder="Rua, Avenida..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="numero_do_endereco"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Integração Assas */}
                <div className="pt-6 border-t border-border/50">
                  <FormField
                    control={form.control}
                    name="assas"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Integrar com Asaas para pagamentos
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-8"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Cadastrando...
                    </>
                  ) : (
                    "Criar conta grátis"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cadastro;
