
const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rainDrops = [];
for(let i = 0; i < 150; i++){
  rainDrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    opacity: Math.random(),
    speed: Math.random() * 12 + 4
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(0,255,255,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  rainDrops.forEach(drop => {
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
  });
  ctx.stroke();
  moveRain();
}

function moveRain() {
  rainDrops.forEach(drop => {
    drop.y += drop.speed;
    if(drop.y > canvas.height){
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  });
}

function animateRain() {
  drawRain();
  requestAnimationFrame(animateRain);
}

animateRain();
