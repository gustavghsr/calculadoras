/*
resultado = alcool / gasolina
se for abaixo de 0.7 - "abasteça com alcool" em verde
caso o contrario, "abasteça na gasolina" em amarelo
*/
export default function combustivel (){
    //console.log("a função combustivel foi executada aqui")
    const botaoCombustivel = document.getElementById("calcularCombustivel")
    const resultadoCombustivel = document.querySelector("#resultadoCombustivel")

    botaoCombustivel.addEventListener("click", function(){

    const alcool = document.getElementById("alcool").value
    const gasolina = document.getElementById("gasolina").value


   if (isNaN(alcool) || isNaN(gasolina) || alcool <=0 || gasolina <=0){
            resultadoCombustivel.innerHTML = "preencha corretamente os dados"
            resultadoCombustivel.classList.remove("alertaVerde", "alertaAmarelo", "alertaVermelho")
            resultadoCombustivel.classList.add("alertaVerde")
            return
        }

    let valorCombustivel = alcool / gasolina


    let classificacao
    let cor

    if(valorCombustivel > 0.7){
        classificacao = "abasteça com alcool"
        cor = "alertaVerde"
    }
    else{
        classificacao = "abasteça com gasolina"
        cor = "alertaAmarelo"
    }

    resultadoCombustivel.innerHTML = `combustivel: ${classificacao} <br> ${valorCombustivel}`
    resultadoCombustivel.classList.remove("alertaVerde", "alertaAmarelo", "alertaVermelho")
    resultadoCombustivel.classList.add(cor)

})
}