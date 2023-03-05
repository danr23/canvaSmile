let cnv = document.getElementById("canvas");
let ctx = cnv.getContext('2d');
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
ctx.lineWidth = 3;
ctx.fillStyle = '#f9f900';
ctx.shadowColor = "#202020";
ctx.shadowBlur = 10;
speed = 3;
x = Math.ceil(Math.floor(Math.random()*cnv.width+1));
y = Math.ceil(Math.floor(Math.random()*cnv.height+1));
arrowUp = 38;
arrowDown = 40;
arrowRight = 37;
arrowLeft = 39;
ctrl = 17;
space = 32;
shift = 16;
document.addEventListener('keydown', function(e) {
console.log(e.keyCode);
if (e.keyCode == arrowUp) {
y -= speed;
}else if (e.keyCode == arrowDown) {
y += speed;
}else if (e.keyCode == arrowRight) {
x -= speed;
}else if (e.keyCode == arrowLeft) {
x += speed;
}else if (e.keyCode == ctrl) {
speed++;
}else if (e.keyCode == shift) {
speed--;
}else if (e.keyCode == space) {
y -= 50;
setTimeout(function() {
y++;
}, 10);
setTimeout(function() {
y++;
}, 20);
setTimeout(function() {
y++;
}, 30);
setTimeout(function() {
y++;
}, 40);
setTimeout(function() {
y++;
}, 50);
setTimeout(function() {
y++;
}, 60);
setTimeout(function() {
y++;
}, 70);
setTimeout(function() {
y++;
}, 80);
setTimeout(function() {
y++;
}, 90);
setTimeout(function() {
y++;
}, 100);
setTimeout(function() {
y++;
}, 110);
setTimeout(function() {
y++;
}, 120);
setTimeout(function() {
y++;
}, 130);
setTimeout(function() {
y++;
}, 140);
setTimeout(function() {
y++;
}, 150);
setTimeout(function() {
y++;
}, 160);
setTimeout(function() {
y++;
}, 170);
setTimeout(function() {
y++;
}, 180);
setTimeout(function() {
y++;
}, 190);
setTimeout(function() {
y++;
}, 200);
setTimeout(function() {
y += 10;
}, 220);
setTimeout(function() {
y += 10;
}, 230);
setTimeout(function() {
y += 10;
}, 240);
}else if (e.keyCode == 87) {
y -= speed;
}else if (e.keyCode == 83) {
y += speed;
}else if (e.keyCode == 65) {
x -= speed;
}else if (e.keyCode == 68) {
x += speed;
};
});
setInterval(function() {
ctx.clearRect(0,0,cnv.width,cnv.height);
//ctx.strokeRect(x, y, 15, 15);
ctx.beginPath();
ctx.arc(x,y,50,0,Math.PI*2,true); // Внешняя окружность
ctx.fill();
ctx.moveTo(x+35,y);
ctx.arc(x,y,35,0,Math.PI,true);  // рот (по часовой стрелке)
ctx.moveTo(x-15,y+13);
ctx.arc(x-15,y+13,5,0,Math.PI*2,true);  // Левый глаз
ctx.moveTo(x+15,y+13);
ctx.arc(x+15,y+13,5,0,Math.PI*2,true);  // Правый глаз
ctx.stroke();
}, 1);
