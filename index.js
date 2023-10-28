//Questão 1
var clientes = [
  {
    id: 1,
    nome: 'Luis Santos Silveira',
    idade: 18
  },
  {
    id: 2,
    nome: 'Ricardo Lopes Alves',
    idade: 30
  },
  {
    id: 3,
    nome: 'Gustavo Silva Junior',
    idade: 26
  }
];

  clientes.forEach(function(cliente) {
    // Dividindo o nome completo em palavras separadas
    var nomeCompleto = cliente.nome.split(' ');
    
    // Extraindo o primeiro nome (índice 0) e o último sobrenome (último índice)
    var primeiroNome = nomeCompleto[0];
    var ultimoSobrenome = nomeCompleto[nomeCompleto.length - 1];
    
    // Imprimindo o nome no formato "últimoSobrenome, primeiroNome"
    console.log(ultimoSobrenome + ', ' + primeiroNome);
  });

//Questão 2
// Definindo a máscara de formatação e o número de entrada
  var mask = "(xx) xxxxx-xxxx";
  var numero = "5(1)9-876-543-21";

// Removendo todos os caracteres não numéricos do número
  numero = numero.replace(/\D/g, '');

  var resultado = "";
  var i = 0;

// Substituindo cada 'x' na máscara pelo próximo dígito do número
  resultado = mask.replace(/x/g, function() {
    return i < numero.length ? numero[i++] : 'x';
  });

  console.log(resultado);

//Questão 3 
//Ordem c,d,a
async function a(){
  b();
  await c();
  await d();
  alertUser("a");
}

function b(){
  return;
  alertUser('b');
}

function c(){
  return new Promise((resolve) => {
    resolve();
    alertUser('c');
  });
}

function d(){
  return new Promise((resolve) => {
    alertUser('d');
    resolve();
  });
}

function alertUser(message){
  console.log('A função é: ' + message);
}
a();
//Questão 4 
//Existe um return no B impedindo de o AlerUser('b')