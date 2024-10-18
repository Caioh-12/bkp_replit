//Criar: email / telefone / idade / sexo

//Elementos do Html
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const tefefone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');


//Variaveis
const novoNome = "Natalia";
const novoSobrenome = "Carrah";
const novoEmail = "nath.carrah@gmail.com";
const novoTelefone = "41-92934016";
const novoIdade = "18";
const novoSexo = "feminino";


//Troca de valores
nome.innerText = novoNome;
sobrenome.innerText = novoSobrenome;
email.innerText = novoEmail;
telefone.innerText = novoTelefone;
idade.innerText = novoIdade;
sexo.innerText = novoSexo;