document.body.onload = EnviarDados;

function EnviarDados(){
    let lista = document.createElement('ul');
    document.querySelector("#div-lista").appendChild(lista);

    //recebendo os valores do DOM
    let num = document.querySelector("#numero").value;
    let bairro = document.querySelector("#bairro").value;
    let cidade = document.querySelector("#cidade").value;
    let area = document.querySelector("#area").value;

    //criando os elementos para enviar ao DOM
    let Li = document.createElement("li")
    // let LiNum = document.createElement("li");
    // let LiBairro = document.createElement("li");
    // let LiCidade = document.createElement("li");
    // let LiArea = document.createElement("li");

    //atribuindo os valores ao element
    Li.innerText = 'A casa de nª ' + num + ' , fica no bairro ' + bairro + ' , na cidade de ' + cidade + ' , localizado na aréa ' + area +'.'
    // LiNum.innerText = num
    // LiBairro.innerText = bairro
    // LiCidade.innerText = cidade
    // LiArea.innerText = area

    document.querySelector('ul').appendChild(Li);
    // document.querySelector('ul').appendChild(LiNum)
    // document.querySelector('ul').appendChild(LiBairro)
    // document.querySelector('ul').appendChild(LiCidade)
    // document.querySelector('ul').appendChild(LiArea)
}

function ApagaDados(){
    let liToRemove = button.parentNode
    document.querySelector("#div-lista").removeChild
}