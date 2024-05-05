//botão de troca de cor
var indexButton= 1
const colorsOne = [ '#1bd6cd', '#959EC9','#a4cac5','#758DA0'] //background
const colorsTwo = [ '#b95987', '#4e5174','#62717e','#22324B'] //header
const colorsThree = ['#131E2F', '#3F3C37', '#131E2F']

const changeBackground = () => {
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const btnColor = document.getElementById('btn-color')

    body.style.background = colorsOne[indexButton]
    header.style.background = colorsTwo[indexButton]
    btnColor.style.background = colorsOne[indexButton]

    if (indexButton == 3) {
        btnColor.style.color = "#000000"
        btnColor.style.border = "2px solid #000000";
        indexButton = 0
    } else {
        btnColor.style.border = "2px solid #ffff";
        btnColor.style.color = "#FFFFFF"
        indexButton++
    }
}
// array com as imagens do slideshow
//bike 1:
function createSlideshow(images, targetId) {
    let index = 0;
    function transition() {
        document.getElementById(targetId).style.opacity = 0.2;
        setTimeout(() => {
            document.getElementById(targetId).src = images[index];
            document.getElementById(targetId).style.opacity = 1;
            index = (index + 1) % images.length;
        });
    }
    function slideshow() {
        transition();
        setTimeout(slideshow, time);
    }
    slideshow();
}
let time = 2500;
// Configuração para cada slideshow
createSlideshow(["./src/bike1/bike1.png", "./src/bike1/bike1.1.png", "./src/bike1/bike1.2.png", "./src/bike1/bike1.3.png"], "slideshowImage1");
createSlideshow(["./src/bike2/bike2.png", "./src/bike2/bike2.1.png", "./src/bike2/bike2.2.png", "./src/bike2/bike2.3.png"], "slideshowImage2");
createSlideshow(["./src/bike3/bike3.png", "./src/bike3/bike3.1.png", "./src/bike3/bike3.2.png", "./src/bike3/bike3.3.png"], "slideshowImage3");
createSlideshow(["./src/bike4/bike4.png", "./src/bike4/bike4.1.png", "./src/bike4/bike4.2.png", "./src/bike4/bike4.3.png"], "slideshowImage4");

function validar(){
    //declarando as variaveis
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario ==="Admin" && senha==="12345"){
        window.open("quiz.html");
    }
    else{
        alert("usuario/senha invalido")
    }
}
function contato(){
    //declarando as variaveis
    let UsuarioContato = document.getElementById("idNome").value;
    let Telefone = document.getElementById("idTelefone").value;
    let Email = document.getElementById("idEmail").value;

    if(UsuarioContato ==="Admin" && Telefone==="12345" && Email == "admin@gmail.com"){
        window.open("./index.html");
    }
    else{
        alert("usuario/senha invalido")
    }
}      
// caminho para a pagina: quiz.html
// funcao para mostrar o quiz
function mostrarQuiz(){
    // Declarando variaveis
    let quiz1=prompt("1- Qual é o termo usado para descrever uma bicicleta que tem uma roda dianteira maior que a traseira?")
    let quiz2=prompt("2- Qual é a competição de ciclismo mais famosa do mundo?")
    let quiz3=prompt("3- Que parte de uma bicicleta é comumente referida como o ''cérebro'' da bicicleta?")
    let quiz4=prompt("4- Qual é o componente de uma bicicleta usado para frear, geralmente encontrado nos guidões?")
    let quiz5=prompt("5- Qual é a parte da bicicleta projetada para absorver impactos e proporcionar conforto ao ciclista?")
    let quiz6=prompt("6- Qual é o evento anual que encoraja as pessoas a andarem de bicicleta para o trabalho?")
    let quiz7=prompt("7- Qual é o nome da peça que protege a corrente da bicicleta?")
    let quiz8=prompt("8- O que você usa para encher os pneus da bicicleta?")
    let quiz9=prompt("9- O que você usa para segurar na bicicleta enquanto pedala?")
    let quiz10=prompt("10- Qual é o nome da peça que conecta o guidão à bicicleta e permite que você vire as rodas?")

    let mostrarQuizElement = document.getElementById("mostrarQuiz");

        mostrarQuizElement.innerHTML = `<div id="div-resposta"> <p id="=resposta-quiz"> Na primeira pergunta, sua resposta foi: "${quiz1}" e a resposta é: "bicicleta de roda grande" ou "penny-farthing"<br> <br> Na segunda pergunta, sua resposta foi: "${quiz2}" e a resposta é: "Tour de France"<br> <br> Na terceira pergunta, sua resposta foi: "${quiz3}" e a resposta é: "computador de bordo" ou "ciclomputador"<br> <br> Na quarta pergunta, sua resposta foi: "${quiz4}" e a resposta é: "alavanca" ou "manete de freio"<br><br> Na quinta pergunta, sua resposta foi: "${quiz5}" e a resposta é: "canote de selim" ou "selim" <br><br> Na sexta pergunta, sua resposta foi: "${quiz6}" e a resposta é: "Dia Mundial do Ciclismo para o Trabalho" ou "Bike to Work Day" <br><br> Na sétima pergunta, sua resposta foi: "${quiz7}" e a resposta é:  "protetor de corrente" ou "cobertura de corrente" <br><br> Na oitava pergunta, sua resposta foi: "${quiz8}" e a resposta é: "bomba de ar" <br><br> Na nona pergunta, sua resposta foi: "${quiz9}" e a resposta é: "guidão" <br><br> Na décima pergunta, sua resposta foi: "${quiz10}" e a resposta é: "mesa" ou "avanço" <br><br></p></div>
<div id="tabela-pontuacao"> <p id="pontuacao" >Veja abaixo os resultados com base no seu desempenho:<br> 1-2 acertos: Mais sorte na próxima vez  <br> 3-4 acertos: Não tá nem bom e nem ruim, famoso na média <br> 5-6 acertos: Tá no caminho certo... <br> 7-8 acertos: Sabe muito do assunto! Parabéns!  <br> 9-10 acertos: Você é simplesmente o rei!!</p></div>.`
    }