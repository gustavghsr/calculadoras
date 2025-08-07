export default function imc(){
    // identificar o  botão e a div do resultado
    const botaoImc = document.getElementById("calcularImc") 
    const resultadoImc = document.querySelector("#resultadoImc")
  
    //adicionar um evento ouvinte no botão 
    botaoImc.addEventListener("click", function(){

        //identificar os valores de peso e altura 
        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value

        // validar entrada dos dados
        if (isNaN(peso) || isNaN(altura) || peso <=0 || altura <=0){
            resultadoImc.innerHTML = "preencha corretamente o peso e a altura"
            resultadoImc.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
            resultadoImc.classList.add("alertaVermelho")
            return
        }

        //aplicar a formula do imc: peso/  (altura * altura)
        const valorImc = peso / (altura * altura)

        /*interpretação do resultado
            abaixo 18.5 (magreza)
            18.5 24.9 (normal)
            25 e 29.9 (sobrepeso)
            acima de 29.9 (obesidade)
        */
       let classificacao
       let cor
        if(valorImc < 18.5){
            classificacao = "Magreza"
            cor = "alertaVermelho"
        }
        else if(valorImc < 24.9){
            classificacao = "Normal"
            cor = "alertaVerde"
        }
        else if(valorImc < 29.9){
            classificacao = "Sobrepeso"
            cor = "alertaAmarelo"
        }
        else{
            classificacao = "Obesidade"
            cor = "alertaVermelho"
        }
        

        // mostrar o resultado para o usuário
            resultadoImc.innerHTML = `IMC; ${valorImc.toFixed(2)} <br>Classifição: ${classificacao}`
            resultadoImc.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
            resultadoImc.classList.add(cor)

    })
}