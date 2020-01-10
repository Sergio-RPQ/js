
var nome_pacientes 		= document.querySelectorAll(".info-nome");
var peso_pacientes 		= document.querySelectorAll(".info-peso");
var altura_pacientes 	= document.querySelectorAll(".info-altura");
var gordura_pacientes 	= document.querySelectorAll(".info-gordura");
var imc_pacientes 		= document.querySelectorAll(".info-imc");
var linha_paciente 		= document.querySelectorAll(".paciente");

for (var i = 0; i < nome_pacientes.length; i++){
	var paciente = {
		"nome": nome_pacientes[i].textContent,
		"peso": peso_pacientes[i].textContent,
		"altura": altura_pacientes[i].textContent,
		"perc_gordura": gordura_pacientes[i].textContent,
		"imc": (parseFloat(peso_pacientes[i].textContent) / (parseFloat(altura_pacientes[i].textContent)*parseFloat(altura_pacientes[i].textContent))).toFixed(2)
	};
	imc_pacientes[i].textContent = paciente.imc;

	if (paciente.imc >= 21){
		linha_paciente[i].classList.add("imc-acima");
		linha_paciente[i].classList.remove("imc-normal");
	}
	else{
		linha_paciente[i].classList.add("imc-normal");
		linha_paciente[i].classList.remove("imc-acima");
	}

	paciente 		= null;
}

/*
Botão para adicionar pacientes na tabela principal do programa
O comportamento padrão de um botão no html é recarregar a página.
preventDefault() evita esse comportamento de recarregar a página na tela.
*/
var btn_adicionar = document.querySelector("#adicionar-paciente");
btn_adicionar.addEventListener("click", function(e){
	
	e.preventDefault();
	var formulario_adiciona = document.querySelector("#form-adiciona-paciente");

	var paciente_novo = {
		"nome": formulario_adiciona.nome.value,
		"peso": formulario_adiciona.peso.value,
		"altura": formulario_adiciona.altura.value,
		"perc_gordura": formulario_adiciona.gordura.value,
		"imc": (parseFloat(formulario_adiciona.peso.value) / (parseFloat(formulario_adiciona.altura.value)*parseFloat(formulario_adiciona.altura.value))).toFixed(2)
	};

	var paciente_tr 	= document.createElement("tr");
	var nome_td     	= document.createElement("td");
	var peso_td     	= document.createElement("td");
	var altura_td     	= document.createElement("td");
	var gordura_td     	= document.createElement("td");
	var imc_td     		= document.createElement("td");

	nome_td.textContent 	= paciente_novo.nome;
	peso_td.textContent 	= paciente_novo.peso;
	altura_td.textContent  	= paciente_novo.altura;
	gordura_td.textContent 	= paciente_novo.perc_gordura;
	imc_td.textContent 		= paciente_novo.imc;	

	paciente_tr.appendChild(nome_td);
	paciente_tr.appendChild(peso_td);
	paciente_tr.appendChild(altura_td);
	paciente_tr.appendChild(gordura_td);
	paciente_tr.appendChild(imc_td);

	if (paciente_novo.imc >= 21){
		paciente_tr.classList.add("imc-acima");
		paciente_tr.classList.remove("imc-normal");
	}
	else{
		paciente_tr.classList.add("imc-normal");
		paciente_tr.classList.remove("imc-acima");
	}

	document.querySelector("#tabela-pacientes").appendChild(paciente_tr);
});