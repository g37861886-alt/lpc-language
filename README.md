# LPC Language - Site Oficial e Recursos

![LPC Language](https://img.shields.io/badge/LPC-Language-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen)

Um site profissional e completo sobre a linguagem de programação **LPC**, incluindo documentação, exemplos, Pack Game Engine e um jogo de Pênalti interativo.

## 🌐 Site Oficial

Visite o site em: [lpcsite-2beq8juk.manus.space](https://lpcsite-2beq8juk.manus.space)

## 📚 Conteúdo

### 1. **Documentação Completa**
- Visão geral da linguagem LPC
- Recursos e funcionalidades
- Exemplos de código
- Guia de instalação da extensão VS Code
- Troubleshooting e FAQ

### 2. **Pack Game Engine**
Uma biblioteca completa de motor de jogo em LPC com:
- ✅ Sistema de entidades com hierarquia
- ✅ Sistema de componentes (ECS)
- ✅ Física básica (gravidade, velocidade)
- ✅ Detecção de colisões
- ✅ Sistema de entrada
- ✅ Renderização de sprites
- ✅ Sistema de animação
- ✅ Sistema de eventos

**Componentes Principais:**
- `Vector2` - Estrutura para posições e velocidades
- `Entity` - GameObject base
- `Scene` - Gerenciador de cenas
- `GameEngine` - Motor principal
- `RigidBody` - Física
- `Collider` - Colisões
- `SpriteRenderer` - Renderização
- `Animator` - Animações

### 3. **Sol Language**
Uma linguagem experimental que mescla:
- **Sintaxe Python** - Legível e intuitiva
- **Metaprogramação Lua** - Poderosa e flexível
- **Modelo de Objetos LPC** - Orientado a objetos

**Recursos:**
- Transpila para Python
- Suporte a tipos estáticos
- Reflexão em tempo de execução
- Decoradores e metaclasses

### 4. **Penalty Kick Game**
Um jogo de pênalti interativo desenvolvido em LPC com:
- 🎮 Física realista da bola
- 🤖 IA do goleiro com previsão de trajetória
- ⌨️ Controles intuitivos (setas + espaço)
- 📊 Sistema de pontuação (5 tentativas)
- 🎯 Detecção de gol automática

**Como Jogar:**
1. Pressione ESPAÇO para começar
2. Use ← → para ajustar o ângulo
3. Use ↑ ↓ para ajustar a força
4. Pressione ESPAÇO para chutar
5. Tente marcar 5 gols!

## 🚀 Começando

### Instalação Local

```bash
# Clonar o repositório
git clone https://github.com/g37861886-alt/lpc-language.git
cd lpc-language

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Estrutura do Projeto

```
lpc-language/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Página inicial
│   │   │   ├── PackGameEngine.tsx    # Documentação Pack Engine
│   │   │   ├── SolLanguage.tsx       # Documentação Sol
│   │   │   └── PenaltyGame.tsx       # Jogo de Pênalti
│   │   ├── components/               # Componentes reutilizáveis
│   │   ├── App.tsx                   # Roteamento
│   │   └── index.css                 # Estilos globais
│   └── index.html
├── penalty-game.lpc                  # Código LPC do jogo
├── package.json
└── README.md
```

## 📖 Documentação

### Pack Game Engine - Quick Start

```lpc
// Criar motor
var engine = GameEngine();

// Criar cena
var scene = Scene("MainScene");

// Criar entidade
var player = Entity("Player");
player.set_position(Vector2(0, 0));

// Adicionar componentes
player.add_component(RigidBody, null);
player.add_component(Collider, null);

// Executar
scene.instantiate(player);
engine.add_scene("main", scene);
engine.set_active_scene("main");
engine.start();

// Loop
for var i = 0; i < 1000; i++:
    engine.update(1.0/60.0);
```

### Sol Language - Exemplo

```sol
object Greeter:
    func greet(name):
        return "Olá, " + name + "!"

main:
    g = Greeter()
    print(g.greet("Mundo"))
```

## 🎮 Penalty Game - Código LPC

O jogo inclui as seguintes classes:

- **Ball** - Bola com física realista
- **Goalkeeper** - Goleiro com IA
- **Goal** - Baliza com detecção de gol
- **PenaltyScene** - Lógica do jogo
- **PenaltyGame** - Motor principal

Ver arquivo `penalty-game.lpc` para código completo.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Routing:** Wouter
- **Build:** Vite
- **Language:** LPC + Sol (experimental)

## 📝 Recursos Adicionais

- [Documentação Pack Game Engine](/pack-game-engine)
- [Documentação Sol Language](/sol-language)
- [Jogar Penalty Kick Game](/penalty-game)
- [GitHub Repository](https://github.com/g37861886-alt/lpc-language)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

**Gabriel** - Desenvolvedor da linguagem LPC e Pack Game Engine

- GitHub: [@g37861886-alt](https://github.com/g37861886-alt)
- Email: gabriel@example.com

## 🙏 Agradecimentos

- Comunidade LPC
- Inspiração em Lua, Python e outras linguagens
- Pack Game Engine contributors

## 📞 Suporte

Para suporte, abra uma issue no [GitHub Issues](https://github.com/g37861886-alt/lpc-language/issues) ou visite o site oficial.

---

**Versão:** 1.0.0  
**Última atualização:** 1º de Março de 2026  
**Status:** ✅ Ativo e em desenvolvimento
