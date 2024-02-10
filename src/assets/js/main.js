var linhaAbaixo = document.querySelector('.abaixo-do-peso');
var linhaNormal = document.querySelector('.peso-normal');
var linhaSobrepeso = document.querySelector('.sobrepeso');
var linhaObesidade1 = document.querySelector('.obesidade-1');
var linhaObesidade2 = document.querySelector('.obesidade-2');
var linhaObesidade3 = document.querySelector('.obesidade-3');

function main() {
    const form = document.querySelector('.form');
    const botaoCalcular = document.querySelector('.botaoCalcular');
    
    botaoCalcular.addEventListener('click', function (event) {
        // previne o comportamento padrão do botão, recarregar a página
        event.preventDefault();
        
        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);

        limpaLinhas();

        calculaImc(peso, altura);
    });
}

function limpaLinhas(){
    linhaAbaixo.classList.remove('selecionado');
    linhaNormal.classList.remove('selecionado');
    linhaSobrepeso.classList.remove('selecionado');
    linhaObesidade1.classList.remove('selecionado');
    linhaObesidade2.classList.remove('selecionado');
    linhaObesidade3.classList.remove('selecionado');
    console.log('limpou')
}

function calculaImc(peso, altura) {
    const resultado = document.querySelector('.resultado');

    // limpa o campo do resultado
    resultado.innerHTML = '';

    if ((peso <= 0 || isNaN(peso)) && (altura <= 0 || isNaN(altura))) {
        resultado.innerHTML = "<div class='estado critico'>Peso e altura inválidos!</div>";
    } else if(peso <= 0 || isNaN(peso)){
        resultado.innerHTML = "<div class='estado critico'>Peso inválido!</div>";
    } else if(altura <= 0 || isNaN(altura)){
        resultado.innerHTML = "<div class='estado critico'>Altura inválida!</div>";
    } else {
        let imc = (peso / (altura ** 2)).toFixed(2);
        let classificacao = '';
        let estado = '';

        console.log(imc, typeof imc)

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
            estado = 'alerta';
            linhaAbaixo.classList.add('selecionado');
        } else if(imc < 24.9){
            classificacao = 'Peso normal';
            estado = 'normal';
            linhaNormal.classList.add('selecionado');
        } else if(imc < 29.9){
            classificacao = 'Sobrepeso';
            estado = 'alerta';
            linhaSobrepeso.classList.add('selecionado');
        } else if(imc < 34.9){
            classificacao = 'Obesidade grau I';
            estado = 'alarmante';
            linhaObesidade1.classList.add('selecionado');
        } else if(imc < 39.9){
            classificacao = 'Obesidade grau II';
            estado = 'critico';
            linhaObesidade2.classList.add('selecionado');
        } else {
            classificacao = 'Obesidade grau III';
            estado = 'critico';
            linhaObesidade3.classList.add('selecionado');
        }
        
        resultado.innerHTML = `<div class='estado ${estado}'>Seu IMC é ${imc} (${classificacao})</span>`;
    }
}

main(); 