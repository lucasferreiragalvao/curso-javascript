var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click",function(event){
    event.preventDefault();
    
    var formAddPaciente = document.querySelector("#form-adicionar-paciente");

    var paciente = obtemInformacoesPaciente(formAddPaciente);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibiMensagensErros(erros);
        return;
    }

    var tabelaPacientes = document.querySelector("#tabela-pacientes");

    tabelaPacientes.appendChild(pacienteTr);

    var mensagensErros = document.querySelector("#mensagens-erros");
    mensagensErros.innerHTML = "";

    formAddPaciente.reset();

});

function obtemInformacoesPaciente(form){
     
    var paciente = {
        nome: form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco");
    if(!validaPeso(paciente.peso)) erros.push("Peso Inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");
    if(paciente.gordura.length == 0) erros.push("Gordura não pode ser em branco");
    
    return erros;
}

function exibiMensagensErros(erros){
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });
}
