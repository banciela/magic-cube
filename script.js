// script.js
// Variável para armazenar o temporizador
let timer;

// Função para iniciar o temporizador
function startTimer() {
    let seconds = 0;
    timer = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = `Timer: ${seconds}s`;
    }, 1000);
}

// Função para parar o temporizador
function stopTimer() {
    clearInterval(timer);
}

// Função para verificar se todos os quadrados têm a cor escolhida



// Selecionando todas as divs pelo ID
const div1 = document.getElementById('1');
const div2 = document.getElementById('2');
const div3 = document.getElementById('3');
const div4 = document.getElementById('4');
const div5 = document.getElementById('5');
const div6 = document.getElementById('6');
const div7 = document.getElementById('7');
const div8 = document.getElementById('8');
const div9 = document.getElementById('9');



//Lista de cores
var colors = ['blue','yellow','orange','red','white','green'];

//Função para sortear uma cor aleatória a cada quadradinho
function getRandomColor(){
    const randomIndex = Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
}

// Selecionando todas as divs dentro da classe .block
const divs = document.querySelectorAll('.block > div');

// Aplicando uma cor aleatória a cada div
divs.forEach(div => {
    //aplica cor inicial
    div.style.backgroundColor = getRandomColor();

    //muda cor a cada clique
    div.addEventListener('click', () => {
        div.style.backgroundColor = getRandomColor();
    })
});

//variavel para guardar a cor 
var chosenColor;
//seleciona cor da lista
var randomColor = colors[Math.floor(Math.random()* colors.length)];

//verifica se ha uma cor armazenada
var savedColor = localStorage.getItem('savedColor');

//se nao houver uma cor armazenada, seleciona uma nova cor
chosenColor = savedColor || getRandomColor();

//seleciona o elemento do titulo pelo ID
document.getElementById('color-title').style.color = randomColor;

//timer
