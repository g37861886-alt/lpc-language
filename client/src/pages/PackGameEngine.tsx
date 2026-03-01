import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Gamepad2, Layers, Cpu, Code2, BookOpen } from "lucide-react";

/**
 * Design System: Modern Documentation-First
 * Pack Game Engine - Comprehensive Documentation Page
 */

export default function PackGameEngine() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-blue-700">Pack Game Engine</span>
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
              Biblioteca de Motor de Jogo Completa
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pack Game Engine
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
              Uma biblioteca profissional de motor de jogo em LPC com sistema de entidades, componentes, física e renderização
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Code2 className="w-5 h-5 mr-2" />
                Ver Documentação
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Quick Start
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
              Características Principais
            </h2>
            <p className="text-lg text-gray-600">
              Tudo que você precisa para desenvolver jogos profissionais em LPC
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Sistema de Entidades e Componentes
                  </h3>
                  <p className="text-gray-600">
                    Arquitetura ECS (Entity Component System) para máxima flexibilidade e reutilização de código
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Física e Colisões
                  </h3>
                  <p className="text-gray-600">
                    Sistema de física integrado com RigidBody, Collider e detecção de colisões
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Sistema de Entrada
                  </h3>
                  <p className="text-gray-600">
                    Suporte completo para teclado, mouse e controle de entrada em tempo real
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Renderização e Animação
                  </h3>
                  <p className="text-gray-600">
                    SpriteRenderer, Animator e sistema de camadas para renderização profissional
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Arquitetura do Engine
            </h2>
            <p className="text-lg text-gray-600">
              Estrutura hierárquica e modular para máxima flexibilidade
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="code-block">
              {`Engine
  ├─ Cena 1
  │   ├─ Player (Entidade)
  │   │   ├─ RigidBody (Componente)
  │   │   ├─ Collider (Componente)
  │   │   └─ SpriteRenderer (Componente)
  │   └─ Enemy (Entidade)
  │       ├─ RigidBody
  │       ├─ Collider
  │       └─ Animator
  ├─ Cena 2
  └─ Cena 3`}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Componentes Principais</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Vector2", desc: "Estrutura para posições e velocidades" },
                    { name: "Entity", desc: "GameObject base para todos os objetos" },
                    { name: "Scene", desc: "Gerenciador de cenas do jogo" },
                    { name: "GameEngine", desc: "Motor principal coordenador" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-emerald-600 font-bold">•</span>
                      <div>
                        <span className="font-mono font-bold text-blue-700">{item.name}</span>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Componentes de Entidade</h3>
                <ul className="space-y-3">
                  {[
                    { name: "RigidBody", desc: "Física com gravidade e velocidade" },
                    { name: "Collider", desc: "Detecção de colisões" },
                    { name: "SpriteRenderer", desc: "Renderização de sprites" },
                    { name: "Animator", desc: "Controle de animações" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-emerald-600 font-bold">•</span>
                      <div>
                        <span className="font-mono font-bold text-blue-700">{item.name}</span>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Start - 5 Minutos
            </h2>
            <p className="text-lg text-gray-600">
              Crie seu primeiro jogo em LPC rapidamente
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="code-block">
              {`// 1. Criar motor
var engine = GameEngine();

// 2. Criar cena
var scene = Scene("Meu Jogo");

// 3. Criar uma entidade
var player = Entity("Player");
player.set_position(Vector2(0, 0));

// 4. Adicionar à cena
scene.instantiate(player);

// 5. Registrar e iniciar
engine.add_scene("main", scene);
engine.set_active_scene("main");
engine.start();

// 6. Loop principal
for var i = 0; i < 100; i++:
    engine.update(1.0/60.0);  // 60 FPS`}
            </div>
          </div>
        </div>
      </section>

      {/* Components API Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              API Completa dos Componentes
            </h2>
            <p className="text-lg text-gray-600">
              Referência rápida para todos os componentes disponíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Vector2</h3>
              <div className="space-y-2 text-sm">
                {[
                  "add(v) - somar vetores",
                  "subtract(v) - subtrair",
                  "multiply(scalar) - multiplicar",
                  "normalize() - normalizar",
                  "magnitude() - comprimento",
                  "distance_to(v) - distância",
                  "dot(v) - produto escalar",
                ].map((method, idx) => (
                  <div key={idx} className="text-gray-600">
                    <code className="text-blue-700 font-mono">{method}</code>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Entity</h3>
              <div className="space-y-2 text-sm">
                {[
                  "add_component(cls, args)",
                  "get_component(cls)",
                  "remove_component(cls)",
                  "set_position(pos)",
                  "get_position()",
                  "set_rotation(angle)",
                  "set_scale(scale)",
                  "update(dt)",
                ].map((method, idx) => (
                  <div key={idx} className="text-gray-600">
                    <code className="text-blue-700 font-mono">{method}</code>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">RigidBody</h3>
              <div className="space-y-2 text-sm">
                {[
                  "set_velocity(vel)",
                  "get_velocity()",
                  "apply_force(force)",
                  "set_mass(m)",
                  "set_gravity_scale(scale)",
                  "use_gravity (bool)",
                ].map((method, idx) => (
                  <div key={idx} className="text-gray-600">
                    <code className="text-blue-700 font-mono">{method}</code>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Collider</h3>
              <div className="space-y-2 text-sm">
                {[
                  "set_size(size)",
                  "get_bounds()",
                  "intersects(other)",
                  "set_trigger(bool)",
                  "on_collision_enter",
                  "on_collision_exit",
                ].map((method, idx) => (
                  <div key={idx} className="text-gray-600">
                    <code className="text-blue-700 font-mono">{method}</code>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">SpriteRenderer</h3>
              <div className="space-y-2 text-sm">
                {[
                  "set_sprite(name)",
                  "set_color(hex)",
                  "set_layer(z)",
                  "set_flip_x(bool)",
                  "set_flip_y(bool)",
                  "set_opacity(alpha)",
                ].map((method, idx) => (
                  <div key={idx} className="text-gray-600">
                    <code className="text-blue-700 font-mono">{method}</code>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Animator</h3>
              <div className="space-y-2 text-sm">
                {[
                  "add_animation(name, frames, speed)",
                  "play(name)",
                  "stop()",
                  "pause()",
                  "resume()",
                  "set_speed(speed)",
                ].map((method, idx) => (
                  <div key={idx} className="text-gray-600">
                    <code className="text-blue-700 font-mono">{method}</code>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Game Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exemplo Completo: Jogo Simples
            </h2>
            <p className="text-lg text-gray-600">
              Um jogo com player, física e colisões
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="code-block">
              {`object Player extends Entity {
    var speed = 5.0;

    func update(delta_time) {
        var rb = get_component(RigidBody);
        if rb:
            var input = scene.engine.get_input();
            if input.is_key_down("LEFT"):
                rb.set_velocity(Vector2(-speed, rb.velocity.y));
            if input.is_key_down("RIGHT"):
                rb.set_velocity(Vector2(speed, rb.velocity.y));
}

object GameScene extends Scene {
    func setup() {
        var player = Player("Player");
        player.position = Vector2(0, 0);
        instantiate(player);
        
        var rb = player.add_component(RigidBody, null);
        rb.use_gravity = true;
        
        var collider = player.add_component(Collider, null);
        collider.set_size(Vector2(1, 1));
        
        var sprite = player.add_component(SpriteRenderer, null);
        sprite.set_sprite("player");
}`}
            </div>
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Recursos Implementados
            </h2>

            <div className="space-y-4">
              {[
                { title: "Sistema de entidades com hierarquia", done: true },
                { title: "Sistema de componentes", done: true },
                { title: "Cenas e gerenciamento", done: true },
                { title: "Física básica (gravidade, velocidade)", done: true },
                { title: "Detecção de colisões", done: true },
                { title: "Sistema de entrada", done: true },
                { title: "Renderização de sprites", done: true },
                { title: "Sistema de animação", done: true },
                { title: "Sistema de eventos", done: true },
                { title: "Suporte a áudio", done: false },
                { title: "Sistema de partículas", done: false },
                { title: "UI/Canvas", done: false },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="text-center">
            <p>
              Pack Game Engine - Biblioteca de Motor de Jogo para LPC
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
