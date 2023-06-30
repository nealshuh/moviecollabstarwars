import { useEffect } from 'react';
import logo from './Logo/MovieStarWars.png';
import './App.css';
import BeginButton from './Components/BeginButton.js'
import WelcomeText from './Components/WelcomeText';
import InfoText from './Components/InfoText.js';

function App() {
  useEffect(() => {
    var canvas = document.querySelector('canvas.dots');

    if (canvas) {
      canvas.setAttribute('height', canvas.clientHeight);
      canvas.setAttribute('width', canvas.clientWidth);

      var context = canvas.getContext('2d');
      var colors = ['#E0E0E0', '#FFFFFF', '#BABABA', '#F5F5F5', '#E9E9E9'];
      var speeds = [1.5, 1.6, 1.7, 1.8, 1.9];
      var sizes = [ 1, 2, 2.5, 3, 3.5]
      var canvasWidth = canvas.width;
      var canvasHeight = canvas.height;

      function initializeDot() {
        var size = sizes[getRandomInt(sizes.length)]
        var speed = speeds[getRandomInt(speeds.length)];
        var color = colors[getRandomInt(colors.length)];
        var polar_radius = 3 *canvasWidth / 4 * Math.random() + 50;
        var polar_angle = Math.random() * 2 * Math.PI;
        var coords = polarToRect(polar_radius, polar_angle);
        return {
          x: coords[0],
          y: coords[1],
          polar_radius: polar_radius,
          polar_angle: polar_angle,
          color: color,
          beginspeed: speed,
          curspeed: speed,
          size: size
        };
      }

      context.translate(canvas.width / 2, canvas.height / 2);

      function getRandomInt(int) {
        return Math.floor(Math.random() * int);
      }

      function polarToRect(r, angle) {
        return [r * Math.sin(angle), r * Math.cos(angle)];
      }

      function drawDot(dot) {
        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI, false);
        context.fillStyle = dot.color;
        context.fill();
        console.log(dot);
      }

      var dots = [];
      for (var i = 0; i < 100; ++i) {
        dots.push(initializeDot());
        drawDot(dots[dots.length - 1]);
      }

      setTimeout(function () {
        window.requestAnimationFrame(moveDot);
      }, 2500);

      function moveDot() {
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        for(var i = 0; i < dots.length; ++i){
          if(dots[i].x >= canvasWidth / 2 || dots[i].x <= -1*canvasWidth / 2 || dots[i].y >= canvasHeight / 2 || dots[i].y <= -1 * canvasHeight / 2){
            dots[i] = initializeDot()
          }
          else{
            var polar_ang = dots[i].polar_angle
            dots[i].polar_radius += dots[i].curspeed
            dots[i].curspeed += dots[i].beginspeed 
            var dotsCoords = polarToRect(dots[i].polar_radius, polar_ang)
            dots[i].x = dotsCoords[0]
            dots[i].y = dotsCoords[1]
            drawDot(dots[i])
          }
        }
        window.requestAnimationFrame(moveDot);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <canvas className="dots">Your browser does not support canvas.</canvas>
        <img className="logo" src={logo} alt="Movie Logo" />
        <BeginButton />
        <WelcomeText />
        <InfoText />
      </header>
    </div>
  );
}

export default App;
