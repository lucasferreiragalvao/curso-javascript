var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = true;
    var alturaEValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoEValido && alturaEValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click",function(event){
    event.preventDefault();
    
    var formAddPaciente = document.querySelector("#form-adicionar-paciente");
    
    var nome = formAddPaciente.nome.value;
    var peso = formAddPaciente.peso.value;
    var altura = formAddPaciente.altura.value;
    var gordura = formAddPaciente.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    nomeTd.textContent = nome;

    var pesoTd = document.createElement("td");
    pesoTd.textContent = peso;

    var alturaTd = document.createElement("td");
    alturaTd.textContent = altura;

    var gorduraTd = document.createElement("td");
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabelaPacientes = document.querySelector("#tabela-pacientes");

    tabelaPacientes.appendChild(pacienteTr);

});