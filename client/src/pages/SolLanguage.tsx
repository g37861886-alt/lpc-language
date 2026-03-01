import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Code2, BookOpen, Zap } from "lucide-react";

/**
 * Design System: Modern Documentation-First
 * Sol Language - Experimental Language Page
 */

export default function SolLanguage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-blue-700">Sol Language</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Voltar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-500 hover:bg-emerald-600 text-white">
              Linguagem Experimental
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sol
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
              Uma linguagem experimental que mescla Python, Lua e LPC para máxima flexibilidade e expressividade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Code2 className="w-5 h-5 mr-2" />
                Começar
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que é Sol?
            </h2>
            <p className="text-lg text-gray-600">
              Uma linguagem de programação experimental que combina o melhor de três mundos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-t-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Sintaxe Python
                </h3>
                <p className="text-gray-600">
                  Legível e intuitiva, inspirada em Python para máxima clareza
                </p>
              </div>
            </Card>

            <Card className="p-8 border-t-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Metaprogramação Lua
                </h3>
                <p className="text-gray-600">
                  Poderosa e flexível, inspirada em Lua para máxima expressividade
                </p>
              </div>
            </Card>

            <Card className="p-8 border-t-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Modelo de Objetos LPC
                </h3>
                <p className="text-gray-600">
                  Orientado a objetos, inspirado em LPC para máxima organização
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Syntax Comparison */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comparação de Sintaxe
            </h2>
            <p className="text-lg text-gray-600">
              Veja como Sol combina o melhor de cada linguagem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">LPC (Tradicional)</h3>
              <div className="code-block">
                {`object HelloWorld {
    func greet(name) {
        print("Olá, " + name + "!");
    }
}

main:
    var obj = HelloWorld();
    obj.greet("Mundo");`}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Sol (Experimental)</h3>
              <div className="code-block">
                {`object HelloWorld:
    func greet(name):
        print("Olá, " + name + "!")

main:
    obj = HelloWorld()
    obj.greet("Mundo")`}
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Exemplo Avançado: Contador com Metaprogramação</h3>
            <div className="code-block">
              {`object Counter:
    func __init__(initial):
        self.count = initial or 0
        return self

    func increment():
        self.count += 1
        return self.count
    
    func decrement():
        self.count -= 1
        return self.count
    
    func __str__():
        return "Counter(" + str(self.count) + ")"

main:
    c = Counter(10)
    print(c.increment())  // 11
    print(c.increment())  // 12
    print(c)             // Counter(12)`}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Características Principais
            </h2>
            <p className="text-lg text-gray-600">
              O que torna Sol especial e poderosa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Sintaxe Limpa</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Sem chaves, usa indentação</li>
                <li>✓ Sem ponto-e-vírgula obrigatório</li>
                <li>✓ Variáveis tipadas opcionalmente</li>
                <li>✓ Strings com múltiplas aspas</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Orientação a Objetos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Classes e objetos nativos</li>
                <li>✓ Herança simples</li>
                <li>✓ Métodos mágicos (__init__, __str__)</li>
                <li>✓ Propriedades e atributos</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Metaprogramação</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Reflexão em tempo de execução</li>
                <li>✓ Modificação dinâmica de classes</li>
                <li>✓ Decoradores e metaclasses</li>
                <li>✓ Eval e exec para código dinâmico</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Interoperabilidade</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Transpila para Python</li>
                <li>✓ Compatível com bibliotecas Python</li>
                <li>✓ Integração com LPC</li>
                <li>✓ Múltiplos backends</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Start
            </h2>
            <p className="text-lg text-gray-600">
              Comece a programar em Sol em minutos
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">1. Instalação</h3>
              <div className="code-block">
                {`# Clonar o repositório
git clone https://github.com/gabriel/sol-lang.git
cd sol-lang

# Ou usar pip (quando disponível)
pip install sol-lang`}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">2. Criar seu primeiro programa</h3>
              <div className="code-block">
                {`// hello.sol
object Greeter:
    func greet(name):
        return "Olá, " + name + "!"

main:
    g = Greeter()
    print(g.greet("Mundo"))`}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">3. Executar</h3>
              <div className="code-block">
                {`# Transpilar para Python e executar
python sol/compiler/solc.py hello.sol -o hello.py
python hello.py

# Ou executar diretamente (quando disponível)
sol hello.sol`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Roadmap
            </h2>
            <p className="text-lg text-gray-600">
              Funcionalidades planejadas para o futuro
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { title: "Transpiler para Python", done: true },
              { title: "Suporte a tipos estáticos", done: false },
              { title: "Compilador nativo", done: false },
              { title: "Sistema de módulos", done: false },
              { title: "Gerenciador de pacotes", done: false },
              { title: "IDE integrada", done: false },
              { title: "Debugger", done: false },
              { title: "Documentação automática", done: false },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  feature.done ? "bg-emerald-500 border-emerald-500" : "border-gray-300"
                }`}>
                  {feature.done && <span className="text-white text-sm">✓</span>}
                </div>
                <span className={feature.done ? "text-gray-700" : "text-gray-500"}>
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="text-center">
            <p>
              Sol - Linguagem Experimental para LPC
            </p>
            <p className="mt-2 text-sm">
              © 2026 LPC Language. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
