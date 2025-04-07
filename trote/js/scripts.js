function calcular(){
    //declarar variável sem tipo
    let soma = 0, acaoSocial ,homenagem,leite,kit,equipe,suplemento, pontosKitSup1 = 0,sangue, pontosSangue = 0
    //recupera o valor da ação social digitado
    acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    //recupera o valor da homenagem digitado
    homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    //recupera a qtde de litros de leite
    leite= document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    //recupera a qtde de kits
    kit= Number(document.getElementById("kit").value)
    //recupera a cor da equipe
    equipe= document.getElementById("equipe").value
    //recupera a qtde de latas de suplemento
    suplemento= document.getElementById("suplemento").value
    pontosKitSup1 = 0 //guarda pontuação de kit 
    if (equipe == "Laranja"){
        //equipe é laranja
        if (kit >= 97 && suplemento >= 49){
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
    } 
    else if(equipe == "Preta"){

    }
    else if (equipe == "Roxa"){

    }
    else if (equipe == "Verde"){

    }

    else {//assume que a equipe é vermelha

    }
    soma = soma + pontosKitSup1

    //sangue
    sangue = Number(document.getElementById("sangue"))

    if(equipe == "Laranja"){
        if (sangue >= 49){
            pontosSangue = 2500 + (sangue- 49) * 20
        }
        else{
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Preta"){
        if(sangue >= 52){
            pontosSangue = 2500 + (sangue - 52) * 20
        }
        else{
            pontosSangue = samgue *20
        }
    }
    else if (equipe == "Roxa"){
        if(sangue >= 51){
            pontosSangue = 2500 + (sangue - 51) * 20
        }
        else{
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Verde"){
        if (sangue >= 44){

        }
        else{
            pontosSangue = sangue * 20
        }
    }
    else {
        if (sangue >= 47){
            pontosSangue = 2500 + (sangue - 47) * 200
        }
    }    
    //devolve o resultado para o HTML
    document.getElementById("soma").innerHTML= `R$ .${soma.toFixed(2)}`

}