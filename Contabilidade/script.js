// Recebe o conteudo do MAIN e armazena na [const = tela]
const tela = document.getElementById("conteudo")
const bool = document.getElementById("vale")
var estado = 0
var estado2 = 0

//VARs a serem calculadas
var inss
var vale = 0
var irrf 
var liquido

//Verifica estado do vale
function vt(){
    if(estado == 1){
        estado = 0
    }
    else{
        estado = 1
    }
}


//Verifica as informações recebidas e gera o código correspondente
function enviar(){    
    
    // Recebe os valores de salário bruto e dependentes
    var bruto = Number.parseInt(document.getElementById("salarioBruto").value)
    var dependentes = Number.parseInt(document.getElementById("dependentes").value)

    // CALCULO DE INSS

        if(bruto <= 1212.00){
            inss = bruto*0.075
        }
        else if(bruto <= 2427.35){
            inss = bruto*0.09
        }
        else if(bruto <= 3641.03){
            inss = bruto*0.12
        }
        else{
            inss = bruto*0.14
        }

    //CALCULO DE IRRF

    var baseIR = (bruto - inss) - (189.59*dependentes)

        if(baseIR < 1903.99){
            irrf=0
        }
        else if(baseIR < 2826.66){
            irrf = baseIR*0.075-142.80
        }
        else if(baseIR < 3751.06){
            irrf = baseIR*0.15-354.80
        }
        else if(baseIR < 4664.69){
            irrf = baseIR*0.225-636.13
        }
        else{
            irrf = baseIR*0.275-869.36
        }
        
    //CALCULO DO VALE
    if(estado == 1){
        vale =  bruto*0.06
    }
    else{}

    //CALCULO LIQUIDO
        liquido = bruto - (inss + irrf + vale) 


    //DIV de resposta com valores calculados
    tela.innerHTML =   `<div class="tela tela02">
    <text>RESULTADO</text>
    <table>
        <tr> <td>Salário bruto</td>   <td class="align">R$ ${bruto}</td> </tr>
        <tr> <td>INSS</td>            <td class="align">R$ ${inss.toFixed(2)}</td> </tr>
        <tr> <td>IRRF</td>            <td class="align">R$ ${irrf.toFixed(2)}</td> </tr>
        <tr> <td>Vale Transporte</td> <td class="align">R$ ${vale.toFixed(2)}</td> </tr>
        <tr> <td>Salário Líquido</td> <td class="align">R$ ${liquido.toFixed(2)}</td> </tr>
    </table>
    <button onclick="reset()">Resetar</button>
    </div>`
} 

function reset(){

    estado2 = 0

    tela.innerHTML = `        <div class="tela dados">

    <label for="#salarioBruto">Salário Bruto:</label>
    <input type="number" id="salarioBruto">

    <label for="#dependentes">Dependentes:</label>
    <input type="number" id="dependentes" inputmode="numeric">

<span>
    <input type="checkbox" name="valeTransporte" id="vale" onclick="vt()">
    <label for="#vale">Vale Transporte</label>
</span>

<button onclick="enviar()">Calcular</button>

</div>`
}
