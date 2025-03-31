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
    //recupera a qtde de kits
    let kit= document.getElementById("kit").value
    soma = soma + (30 * kit)
    //recupera a cor da equipe
    let equipe= document.getElementById("equipe").value
    let pontosKit = 0 //guarda pontuação de kit 
    if (equipe == "Laranja"){
        //equipe é laranja
        if (kit >= 97 )
            pontosKit = 5000 + ((kit - 97) * 30)
        }
        else if (kit >= 78){
            pontosKit = 4000 + ((kit - 79) * 30)
        }
        else if (kit >= 49){
            pontosKit = 2500 + ((kit - 49) * 30)
        }
        else if (kit >= 19){
            pontosKit = 1000 + ((kit - 19) * 30)
    }
    alert(pontosKit)
    soma = soma + pontosKit
    //recupera a qtde de latas de suplemento
    let suplemento= document.getElementById("suplemento").value
    soma = soma + (15 * Number(suplemento))
    //recupera a qtde de pacote de 5kg
    let pacote5kg= document.getElementById("pacote5kg").value
    soma= soma + (5 * Number(pacote5kg))
    //recupera a qtde de pacote de 1kg
    let pacote1kg= document.getElementById("pacote1kg").value
    soma= soma + (1 * Number(pacote1kg))
    //recupera a qtde de pacote de 400/500g
    let pacotedemacarrao= document.getElementById("pacotedemacarrao").value
    soma= soma + (0.5 * Number(pacotedemacarrao))
    //recupera a qtde de oleo
    let oleo= document.getElementById("oleo").value
    soma= soma + (1 * Number(oleo))
    //devolve o resultado para o HTML
    document.getElementById("soma").innerHTML=soma.toFixed(2)

}