function calcular(){
    //declarar variável sem tipo
    let soma = 0
    //recupera o valor da ação social digitado
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    //recupera a qtde de litros de leite
    let leite= document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    //recupera a qtde de kits avulsos
    let kitAvulso= document.getElementById("kitAvulso").value
    soma = soma + (30 * kitAvulso)
    //recupera a qtde de latas de suplemento
    let suplementoAvulso= document.getElementById("suplementoAvulso").value
    soma = soma + (15 * Number(suplementoAvulso))
    //recupera a qtde de pacote de 5kg
    let pacote5kgAvulso= document.getElementById("pacote5kgAvulso").value
    soma= soma + (5 * Number(pacote5kgAvulso))
    //recupera a qtde de pacote de 1kg
    let pacote1kgAvulso= document.getElementById("pacote1kgAvulso").value
    soma= soma + (1 * Number(pacote1kgAvulso))
    //recupera a qtde de pacote de 400/500g
    let pacotedemacarrao= document.getElementById("pacotedemacarrao").value
    soma= soma + (0.5 * Number(pacotedemacarrao))
    //recupera a qtde de oleo
    let oleo= document.getElementById("oleo").value
    soma= soma + (1 * Number(oleo))
    //devolve o resultado para o HTML
    document.getElementById("soma").innerHTML=soma.toFixed(2)

}