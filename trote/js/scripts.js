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
     //recupera a qtde de latas de suplemento
     let suplemento= document.getElementById("suplemento").value
     soma = soma + (15 * Number(suplemento))
    //recupera a cor da equipe
    let equipe= document.getElementById("equipe").value
    let pontosKit = 0 //guarda pontuação de kit 
    if (equipe == "Laranja"){
        //equipe é laranja
        if (kit >= 97 && suplemento >= 49)
            pontosKit = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            pontosKit = 4000 + ((kit - 79) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){ 
            pontosKit = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            pontosKit = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
    }
    alert(pontosKit)
    soma = soma + pontosKit
    //devolve o resultado para o HTML
    document.getElementById("soma").innerHTML=soma.toFixed(2)

}