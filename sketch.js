//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 2;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variáveis da raquete do oponente
let xRaqueteOponente = 590;
let yRaqueteOponente = 150;
let velocidadeYOponente;


//variável PColiide2D
let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//função configuração
function setup() {
  createCanvas(600, 400);
}

//função desenho
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  //colisaoRaqueteOponenteBiblioteca();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
   
}

//função cria a bolinha
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

//função movimentando a bolinha
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

//função verificando se a bolinha toca as bordas
function verificaColisaoBorda(){
  if(xBolinha + raio  > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
  
//função mostra raquete
function mostraRaquete(x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete); 
}

/* função mostra raquete oponente
function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete); 
}
*/

//função movimentando raquete
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

//função verificando colisao com a raquete
function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

//função verifica colisao com a raquete da biblioteca de outra pessoa
function verificaColisaoRaquete(x,y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}

/*função verifica colisão com a raaquete do oponente
function colisaoRaqueteOponenteBiblioteca(){
  colidiu =
  collideRectCircle(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}
*/


//função movimentando a raquete do oponente
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete/2-30;
  yRaqueteOponente += velocidadeYOponente
}

//função incluindo placar ao jogo
function incluiPlacar(){
  fill(255)
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

//função marcando ponto
function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosDoOponente += 1;
  }
}