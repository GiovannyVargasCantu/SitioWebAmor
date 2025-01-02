import { Component } from '@angular/core';
import { Router } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  
  hearts = new Array(15); // Generar 15 corazones animados alrededor de la foto.
  constructor(private router:Router) {}

  irALovePage() {
    console.log("HOLA")
    this.router.navigate(['/love']); // Navega a la página "Love"
    console.log("Si PASO")
  }
  isConfettiActive: boolean = false;

  lanzarConfettiCorazones() {
    this.isConfettiActive = true;  // Mostrar el mensaje ¡TE AMO!

    const duration = 3000; // Duración total del confetti en milisegundos
    const end = Date.now() + duration;

    // Configuración de colores y forma (corazones)
    const colors = ['#ff69b4', '#ffb6c1', '#e91e63', '#f44336'];
    const shapes = [
      confetti.shapeFromText({
        text: '❤️',
        scalar: 2.5 // Tamaño de los corazones
      })
    ];

    // Lanza el confetti desde la parte superior
    const launchFromTop = () => {
      confetti({
        particleCount: 4,
        startVelocity: 30,
        spread: 40,
        gravity: 1,
        scalar: 0.8,
        shapes: shapes,
        colors: colors,
        origin: { x: Math.random(), y: 0 }, // Desde arriba
        zIndex: 9999,
      });
    };

    // Lanza el confetti desde la parte inferior
    const launchFromBottom = () => {
      confetti({
        particleCount: 4,
        startVelocity: 30,
        spread: 40,
        gravity: -1, // Invertimos la gravedad para que suba
        scalar: 0.8,
        shapes: shapes,
        colors: colors,
        origin: { x: Math.random(), y: 1 }, // Desde abajo
        zIndex: 9999,
      });
    };

    // Combina ambos lanzadores
    const launchBothDirections = () => {
      launchFromTop();
      launchFromBottom();
    };

    // Ejecutar la animación mientras dure
    const runAnimation = () => {
      if (Date.now() < end) {
        launchBothDirections(); // Lanza confetti en ambas direcciones
        requestAnimationFrame(runAnimation); // Repite mientras dure el evento
      }
    };

    runAnimation(); // Inicia la animación

    // Esconde el mensaje después del evento
    setTimeout(() => {
      this.isConfettiActive = false;
    }, 5000); // El mensaje se oculta después de 5 segundos
  
  
  }

} 
