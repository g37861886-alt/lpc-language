import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Download, Zap, BookOpen, Github, ExternalLink } from "lucide-react";

/**
 * Design System: Modern Documentation-First
 * Color Palette: Deep Blue (#1e3a8a), Emerald Green (#10b981), White, Gray
 * Typography: Poppins (display), Inter (body), Fira Code (code)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg text-blue-700">LPC Language</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Recursos
            </a>
            <a href="#examples" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Exemplos
            </a>
            <a href="#install" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Instalação
            </a>
            <a href="#docs" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Documentação
            </a>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/gabriel/lpc-vscode" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663392126780/2BeQ8jukmKsfdp9DXozCNu/lpc-documentation-pattern-MbnzoAqPC28XpktTXpmGVN.webp"
            alt="pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-500 hover:bg-emerald-600 text-white">
              Versão 1.0.0 - Lançado em 8 de Fevereiro de 2026
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              LPC Language & Sol
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
              Suporte profissional para linguagens de programação multi-plataforma com extensão VS Code completa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Download className="w-5 h-5 mr-2" />
                Instalar Extensão
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recursos Poderosos
            </h2>
            <p className="text-lg text-gray-600">
              Tudo que você precisa para desenvolver com LPC e Sol de forma profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gray-900 mb-2">
                    Syntax Highlighting
                  </h3>
                  <p className="text-gray-600">
                    Destaque de sintaxe profissional para LPC e Sol com suporte a temas personalizados
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gray-900 mb-2">
                    Code Snippets
                  </h3>
                  <p className="text-gray-600">
                    Snippets prontos para uso rápido e eficiente no desenvolvimento
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gray-900 mb-2">
                    Auto-Completion
                  </h3>
                  <p className="text-gray-600">
                    Autocompletar inteligente configurado para LPC e Sol
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gray-900 mb-2">
                    Documentação Integrada
                  </h3>
                  <p className="text-gray-600">
                    Acesso rápido à documentação diretamente no editor
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663392126780/2BeQ8jukmKsfdp9DXozCNu/lpc-features-illustration-FnHis8CwVkGysTypcwUjfp.webp"
              alt="Features illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="examples" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Linguagens Suportadas
            </h2>
            <p className="text-lg text-gray-600">
              Suporte completo para LPC e Sol com exemplos práticos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LPC */}
            <div>
              <div className="mb-6">
                <Badge className="bg-blue-700 hover:bg-blue-800 text-white mb-4">
                  LPC Programming Language
                </Badge>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Linguagem Poderosa
                </h3>
                <p className="text-gray-600 mb-6">
                  LPC é uma linguagem poderosa para desenvolvimento de jogos e aplicações interativas com suporte a orientação a objetos.
                </p>
              </div>
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

            {/* Sol */}
            <div>
              <div className="mb-6">
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white mb-4">
                  Sol - Experimental
                </Badge>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Máxima Flexibilidade
                </h3>
                <p className="text-gray-600 mb-6">
                  Sol mescla Python, Lua e LPC para oferecer máxima flexibilidade e expressividade no código.
                </p>
              </div>
              <div className="code-block">
                {`object Counter:
    func __init__(initial):
        self.count = initial or 0
        return self

    func increment():
        self.count += 1
        return self.count

main:
    c = Counter(10)
    print(c.increment())  // 11`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Instalação Rápida
            </h2>
            <p className="text-lg text-gray-600">
              Comece em poucos passos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-display text-lg text-gray-900">
                  Abra VS Code
                </h3>
              </div>
              <p className="text-gray-600 ml-14">
                Abra o Visual Studio Code em seu computador
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-display text-lg text-gray-900">
                  Abra Extensions
                </h3>
              </div>
              <p className="text-gray-600 ml-14">
                Pressione <kbd className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Ctrl+Shift+X</kbd>
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-display text-lg text-gray-900">
                  Procure por LPC
                </h3>
              </div>
              <p className="text-gray-600 ml-14">
                Digite "LPC Language" na barra de busca
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-display text-lg text-gray-900">
                  Clique em Install
                </h3>
              </div>
              <p className="text-gray-600 ml-14">
                Clique no botão "Install" e pronto!
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663392126780/2BeQ8jukmKsfdp9DXozCNu/lpc-installation-guide-YanuBxCqN7KAZYNV6AxpTQ.webp"
              alt="Installation guide"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="docs" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comece Rápido
            </h2>
            <p className="text-lg text-gray-600">
              Use snippets prontos para acelerar seu desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg text-gray-900 mb-4">
                Snippets Disponíveis
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <code className="text-blue-700 font-mono font-bold">lpc</code>
                  <span className="text-gray-600">Cria estrutura básica de LPC</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <code className="text-blue-700 font-mono font-bold">sol</code>
                  <span className="text-gray-600">Cria estrutura básica de Sol</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <code className="text-blue-700 font-mono font-bold">func</code>
                  <span className="text-gray-600">Cria uma função</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <code className="text-blue-700 font-mono font-bold">object</code>
                  <span className="text-gray-600">Cria um objeto/classe</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <code className="text-blue-700 font-mono font-bold">if</code>
                  <span className="text-gray-600">Cria um condicional</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <code className="text-blue-700 font-mono font-bold">for</code>
                  <span className="text-gray-600">Cria um loop</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-gray-900 mb-4">
                Temas Suportados
              </h3>
              <p className="text-gray-600 mb-6">
                A extensão funciona perfeitamente com qualquer tema TextMate, incluindo:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">One Dark Pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Dracula</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Nord</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Solarized Dark</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Material Theme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Troubleshooting
            </h2>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="font-display text-lg text-gray-900 mb-3">
                  Syntax highlighting não aparece?
                </h3>
                <p className="text-gray-600">
                  Recarregue a janela do VS Code pressionando <kbd className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">Ctrl+R</kbd>
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="font-display text-lg text-gray-900 mb-3">
                  Snippets não funcionam?
                </h3>
                <p className="text-gray-600">
                  Verifique se a extensão está habilitada na seção Extensions do VS Code
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="font-display text-lg text-gray-900 mb-3">
                  Encontrou um bug?
                </h3>
                <p className="text-gray-600 mb-4">
                  Abra uma issue no repositório GitHub do projeto
                </p>
                <Button variant="outline" asChild>
                  <a href="https://github.com/gabriel/lpc-vscode/issues" target="_blank" rel="noopener noreferrer">
                    Abrir Issue
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Funcionalidades Planejadas
            </h2>

            <div className="space-y-4">
              {[
                { title: "IntelliSense/Autocomplete avançado", done: false },
                { title: "Linting (análise de código)", done: false },
                { title: "Debugging integrado", done: false },
                { title: "Code formatter", done: false },
                { title: "Go to Definition", done: false },
                { title: "Find References", done: false },
                { title: "Documentação gerada", done: false },
                { title: "Pack Game Engine snippets", done: false },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    feature.done ? "bg-emerald-500 border-emerald-500" : "border-gray-300"
                  }`}>
                    {feature.done && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span className={feature.done ? "text-gray-500 line-through" : "text-gray-700"}>
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Instale a extensão LPC Language agora e comece a desenvolver com suporte profissional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Download className="w-5 h-5 mr-2" />
                Instalar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                <Github className="w-5 h-5 mr-2" />
                Ver no GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display text-white mb-4">LPC Language</h4>
              <p className="text-sm">
                Suporte profissional para linguagens de programação multi-plataforma
              </p>
            </div>
            <div>
              <h4 className="font-display text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition">Exemplos</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/gabriel/lpc-vscode" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">Issues</a></li>
                <li><a href="#" className="hover:text-white transition">Discussões</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Licença MIT</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              Desenvolvido por Gabriel • Baseado em TextMate grammars • Inspirado em LPC, Python e Lua
            </p>
            <p className="mt-2">
              © 2026 LPC Language. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
