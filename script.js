// trocando a cores

//Initial data
let currentColor = 'black';

//Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
})

//Function
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active'); //primeiro remove e depois adiciona.
    e.target.classList.add('active');
}

//Selecionando a tag canvas

/* 
Passo a passo para desenhar no canvas:
-Quando o click do mouse ABAIXAR, ative o modo desenho.
-Quando o mouse se MOVER, se o modo desenhar estiver ativado, desenhe.
-Quando o click do mouse LEVANTAR, dsative o modo desenho.
*/

//Initial Data
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;
let mouseX = 0;
let mouseY = 0;


//events
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', MouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

//function

function mouseDownEvent(e){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function MouseMoveEvent(e){
    if(canDraw){
        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent(){
    canDraw = false;
}

function draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    // Desenhar

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

//Limpar a tela canvas

//Initial data


//Events
document.querySelector('.clear').addEventListener('click', clearscreen);


//Function
function clearscreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}