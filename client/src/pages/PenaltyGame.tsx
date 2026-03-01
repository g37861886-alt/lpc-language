import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { Gamepad2, RotateCcw, Volume2 } from "lucide-react";

/**
 * Design System: Modern Documentation-First
 * Penalty Kick Game - Interactive Game Page
 */

export default function PenaltyGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameState, setGameState] = useState("ready");
  const [aimAngle, setAimAngle] = useState(0);
  const [aimForce, setAimForce] = useState(0);
  const gameStateRef = useRef({
    ball: { x: 0, y: -3, vx: 0, vy: 0, moving: false },
    goalkeeper: { x: 0, y: 4 },
    score: 0,
    attempts: 0,
    aimAngle: 0,
    aimForce: 0,
    gameState: "ready",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar dimensões do canvas
    canvas.width = 800;
    canvas.height = 600;

    // Variáveis do jogo
    const game = gameStateRef.current;
    const keysPressed: { [key: string]: boolean } = {};

    // Event listeners para teclado
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed[e.key.toLowerCase()] = true;

      if (e.key === " ") {
        e.preventDefault();
        if (game.gameState === "ready") {
          game.gameState = "aiming";
          game.aimAngle = 0;
          game.aimForce = 0;
        } else if (game.gameState === "aiming") {
          game.gameState = "kicking";
          game.attempts += 1;

          // Calcular direção do chute
          const rad = (game.aimAngle * Math.PI) / 180;
          const dirX = Math.sin(rad);
          const dirY = Math.cos(rad);
          const force = game.aimForce;

          game.ball.vx = dirX * force;
          game.ball.vy = dirY * force;
          game.ball.moving = true;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Loop de atualização
    const gameLoop = setInterval(() => {
      const deltaTime = 0.016; // ~60 FPS

      // Atualizar estado do jogo
      if (game.gameState === "aiming") {
        if (keysPressed["arrowleft"]) game.aimAngle -= 2;
        if (keysPressed["arrowright"]) game.aimAngle += 2;
        if (keysPressed["arrowup"]) {
          game.aimForce += 0.5;
          if (game.aimForce > 40) game.aimForce = 40;
        }
        if (keysPressed["arrowdown"]) {
          game.aimForce -= 0.5;
          if (game.aimForce < 0) game.aimForce = 0;
        }
      }

      // Atualizar bola
      if (game.ball.moving) {
        game.ball.vy += 9.8 * deltaTime;
        game.ball.x += game.ball.vx * deltaTime;
        game.ball.y += game.ball.vy * deltaTime;

        // Atrito
        game.ball.vx *= 0.99;
        game.ball.vy *= 0.99;

        // Parar se velocidade muito baixa
        if (
          Math.sqrt(game.ball.vx ** 2 + game.ball.vy ** 2) < 0.1 &&
          game.ball.y > 0
        ) {
          game.ball.moving = false;
          game.ball.vx = 0;
          game.ball.vy = 0;

          if (game.gameState === "kicking") {
            // Verificar gol
            if (
              Math.abs(game.ball.x) < 4 &&
              game.ball.y > 4.5 &&
              game.ball.y < 5.5
            ) {
              game.gameState = "goal";
              game.score += 1;
            } else {
              game.gameState = "miss";
            }
          }
        }
      }

      // Atualizar goleiro
      if (game.ball.moving) {
        const timeToGoal =
          game.ball.vy !== 0 ? (game.ball.y - 4) / game.ball.vy : 0;
        const predictedX = game.ball.x + game.ball.vx * timeToGoal;
        const targetX = Math.max(-4, Math.min(4, predictedX));

        if (game.goalkeeper.x < targetX - 0.1) {
          game.goalkeeper.x += 15 * deltaTime;
        } else if (game.goalkeeper.x > targetX + 0.1) {
          game.goalkeeper.x -= 15 * deltaTime;
        }
      }

      // Renderizar
      renderGame(ctx, canvas, game);

      // Atualizar estado React
      setScore(game.score);
      setAttempts(game.attempts);
      setGameState(game.gameState);
      setAimAngle(game.aimAngle);
      setAimForce(game.aimForce);
    }, 16);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const renderGame = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    game: any
  ) => {
    // Limpar canvas
    ctx.fillStyle = "#1e3a8a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar campo
    ctx.fillStyle = "#10b981";
    ctx.fillRect(50, 50, 700, 500);

    // Desenhar linha central
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(400, 50);
    ctx.lineTo(400, 550);
    ctx.stroke();
    ctx.setLineDash([]);

    // Desenhar área de pênalti
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    ctx.strokeRect(250, 50, 300, 150);

    // Desenhar baliza
    ctx.strokeStyle = "#ffff00";
    ctx.lineWidth = 3;
    ctx.strokeRect(300, 50, 200, 40);

    // Escala do jogo para pixels
    const scale = 50;
    const centerX = 400;
    const centerY = 300;

    // Desenhar bola
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(
      centerX + game.ball.x * scale,
      centerY - game.ball.y * scale,
      8,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Desenhar goleiro
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(
      centerX + game.goalkeeper.x * scale - 15,
      centerY - 4 * scale - 20,
      30,
      40
    );

    // Desenhar interface
    ctx.fillStyle = "#ffffff";
    ctx.font = "16px Arial";
    ctx.fillText(`Gols: ${game.score}`, 20, 30);
    ctx.fillText(`Tentativa: ${game.attempts}/5`, 20, 55);

    // Desenhar informações de aiming
    if (game.gameState === "aiming") {
      ctx.fillStyle = "#ffff00";
      ctx.font = "14px Arial";
      ctx.fillText(`Ângulo: ${game.aimAngle}°`, 20, 80);
      ctx.fillText(`Força: ${game.aimForce.toFixed(1)}`, 20, 100);
      ctx.fillText("Pressione ESPAÇO para chutar", 20, 120);

      // Desenhar indicador de direção
      const rad = (game.aimAngle * Math.PI) / 180;
      const arrowLength = 80;
      ctx.strokeStyle = "#ffff00";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.sin(rad) * arrowLength,
        centerY - Math.cos(rad) * arrowLength
      );
      ctx.stroke();
    } else if (game.gameState === "ready") {
      ctx.fillStyle = "#ffff00";
      ctx.font = "16px Arial";
      ctx.fillText("Pressione ESPAÇO para começar", 20, 80);
    } else if (game.gameState === "goal") {
      ctx.fillStyle = "#00ff00";
      ctx.font = "24px Arial";
      ctx.fillText("GOL!!!", centerX - 50, centerY);
    } else if (game.gameState === "miss") {
      ctx.fillStyle = "#ff0000";
      ctx.font = "24px Arial";
      ctx.fillText("PERDEU!", centerX - 50, centerY);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-blue-700">
              Penalty Kick Game
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Voltar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-500 hover:bg-emerald-600 text-white">
              Jogo Interativo em LPC
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Penalty Kick Game
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 font-light">
              Um jogo de pênalti desenvolvido em LPC com o Pack Game Engine
            </p>
          </div>
        </div>
      </section>

      {/* Game Canvas */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-white shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Jogue Agora
                </h2>
                <canvas
                  ref={canvasRef}
                  className="w-full border-4 border-blue-700 rounded-lg bg-blue-900"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    Placar
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span className="font-medium">Gols Marcados:</span>
                      <span className="font-bold text-emerald-600">{score}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span className="font-medium">Tentativas:</span>
                      <span className="font-bold text-blue-600">
                        {attempts}/5
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    Controles
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        ← →
                      </span>{" "}
                      Ajustar ângulo
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        ↑ ↓
                      </span>{" "}
                      Ajustar força
                    </p>
                    <p>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        ESPAÇO
                      </span>{" "}
                      Chutar
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Como Jogar
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-700 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Apontar
                    </h3>
                    <p className="text-gray-600">
                      Use as setas esquerda e direita para ajustar o ângulo do
                      chute. O indicador amarelo mostra a direção.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-700 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Ajustar Força
                    </h3>
                    <p className="text-gray-600">
                      Use as setas para cima e para baixo para aumentar ou
                      diminuir a força do chute (máximo: 40).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-700 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Chutar
                    </h3>
                    <p className="text-gray-600">
                      Pressione ESPAÇO para chutar a bola. O goleiro tentará
                      bloquear!
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-700 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Marcar Gol
                    </h3>
                    <p className="text-gray-600">
                      Se a bola entrar na baliza (área amarela), você marca um
                      gol! Você tem 5 tentativas.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Características do Jogo
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  Física Realista
                </h3>
                <p className="text-gray-600">
                  A bola segue física realista com gravidade, atrito do ar e
                  velocidade máxima, criando uma experiência imersiva.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  IA do Goleiro
                </h3>
                <p className="text-gray-600">
                  O goleiro usa previsão de trajetória para tentar bloquear seus
                  chutes. Quanto melhor você chutar, mais difícil é bloquear!
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  Controles Intuitivos
                </h3>
                <p className="text-gray-600">
                  Controle total sobre ângulo e força do chute usando apenas o
                  teclado. Simples de aprender, difícil de dominar!
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  Desenvolvido em LPC
                </h3>
                <p className="text-gray-600">
                  Construído com o Pack Game Engine em LPC, demonstrando as
                  capacidades completas da linguagem para desenvolvimento de
                  jogos.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Código Fonte
            </h2>

            <Card className="p-6 bg-gray-50">
              <p className="text-gray-600 mb-4">
                O código completo do jogo está disponível em LPC. Você pode
                encontrar:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  ✓ <span className="font-mono">Ball</span> - Classe da bola
                  com física
                </li>
                <li>
                  ✓ <span className="font-mono">Goalkeeper</span> - IA do
                  goleiro
                </li>
                <li>
                  ✓ <span className="font-mono">Goal</span> - Detecção de gol
                </li>
                <li>
                  ✓ <span className="font-mono">PenaltyScene</span> - Lógica
                  do jogo
                </li>
                <li>
                  ✓ <span className="font-mono">PenaltyGame</span> - Motor
                  principal
                </li>
              </ul>

              <Button className="mt-6 w-full bg-blue-700 hover:bg-blue-800">
                <a
                  href="https://github.com/gabriel/penalty-game-lpc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Código no GitHub
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="text-center">
            <p>Penalty Kick Game - Desenvolvido em LPC com Pack Game Engine</p>
            <p className="mt-2 text-sm">
              © 2026 LPC Language. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
