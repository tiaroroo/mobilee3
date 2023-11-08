//
// D: Curso de Projetos
//

// Seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");

// Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
const atualizaDisplay = () => {
  display.value = operacaoAtual;
};

const insereNumero = (evento) => {
  if (calculando) {
    operacaoAtual = evento.target.textContent;
    calculando = false;
  } else {
    operacaoAtual += evento.target.textContent;
  }
  atualizaDisplay();
};

const insereOperador = (evento) => {
  if (operacaoAtual !== "") {
    if (!calculando) {
      if (operador !== null) calcula();
      valorAnterior = operacaoAtual;
      operacaoAtual = "";
    }
    operador = evento.target.textContent;
  }
};

const calcula = () => {
  let resultado = null;
  const operandoAnterior = parseFloat(valorAnterior);
  const operandoAtual = parseFloat(operacaoAtual);

  switch (operador) {
    case "+":
      resultado = operandoAnterior + operandoAtual;
      break;
    case "-":
      resultado = operandoAnterior - operandoAtual;
      break;
    case "*":
      resultado = operandoAnterior * operandoAtual;
      break;
    case "/":
      if (operandoAtual !== 0) {
        resultado = operandoAnterior / operandoAtual;
      } else {
        alert("Erro: Divisão por zero não é permitida!");
        return;
      }
      break;
  }
  operacaoAtual = String(resultado);
  valorAnterior = operacaoAtual;
  calculando = true;
  atualizaDisplay();
};

const inserePonto = () => {
  if (operacaoAtual.indexOf(".") === -1) {
    operacaoAtual += ".";
    atualizaDisplay();
  }
};

// EventListeners
botaoIgual.addEventListener("click", () => {
  if (operador !== null && operacaoAtual !== "" && !calculando) {
    calcula();
    operador = null;
  }
});
botaoPonto.addEventListener("click", inserePonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botoesOperadores.forEach((botao) =>
  botao.addEventListener("click", insereOperador)
);

//
// D: Formação Front-end
//
function limpar() { const display=
    document.querySelector ("#displayInput").value= ''}

    function mfSegundos(num) {	//Trasforma Milesegundo em Segundos
        var seg = num * 1000;
        return seg;
    }
    
    //---------------------------------------------------------------------
    
    function clearV() {	//Limpar o Visor da Calculadora
    /*
    Projeto: Calculadora;
    Programado por: Retynck;
    Data: 14/07/2015;
    */
        //Animação :D
        var segundos = mfSegundos(2);
        document.getElementById('hMensagem').innerHTML = 'Limpo'; 
        setTimeout("document.getElementById('hMensagem').innerHTML = '' ", segundos );
        //Limpa de verdade
        document.getElementById('vsor').value = '';
        
    }
    
    function writeN(num) {	//Ler Numeros
        document.getElementById('vsor').value = document.getElementById('vsor').value + num;
    }
    
    function writeP(num) { //Ler Operadores
        document.getElementById('vsor').value = document.getElementById('vsor').value + num;
    }
    
    function mOperation() {
        var result = document.getElementById('vsor').value;
        document.getElementById('vsor').value = '';
        document.getElementById('vsor').value = eval(result);
    }
    
     