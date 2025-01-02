import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import confetti from 'canvas-confetti';
@Component({
  selector: 'app-love',
  templateUrl: './love.page.html',
  styleUrls: ['./love.page.scss'],
  standalone: true,
  imports: [IonicModule],  
})
export class LovePage {

  isConfettiActive: boolean = false;

  constructor() { }

  ngOnInit() {
   
    this.lanzarConfettiCorazones();
  }

  lanzarConfettiCorazones() {
    this.isConfettiActive = true;  

    const duration = 3000; 
    const end = Date.now() + duration;

    const colors = ['#ff69b4', '#ffb6c1', '#e91e63', '#f44336'];  
    const shapes = [
      confetti.shapeFromText({
        text: '❤️',
        scalar: 2.5 
      })
    ];

  
    const launchFromTop = () => {
      confetti({
        particleCount: 4,
        startVelocity: 30,
        spread: 40,
        gravity: 1,
        scalar: 0.8,
        shapes: shapes,
        colors: colors,
        origin: { x: Math.random(), y: 0 },  
        zIndex: 9999,
      });
    };

    
    const launchFromBottom = () => {
      confetti({
        particleCount: 4,
        startVelocity: 30,
        spread: 40,
        gravity: -1, 
        scalar: 0.8,
        shapes: shapes,
        colors: colors,
        origin: { x: Math.random(), y: 1 }, 
        zIndex: 9999,
      });
    };

 
    const launchBothDirections = () => {
      launchFromTop();
      launchFromBottom();
    };


    const runAnimation = () => {
      if (Date.now() < end) {
        launchBothDirections(); 
        requestAnimationFrame(runAnimation);  
      }
    };

    runAnimation();  
    
    setTimeout(() => {
      this.isConfettiActive = false;
    }, 5000);
  }
}