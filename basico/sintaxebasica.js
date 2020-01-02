/*
DECLARAÇÕES
	Existem três tipos de declarações em JavaScript.

	var
		Declara uma variável, opcionalmente, inicializando-a com um valor.
 	let
		Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
 	const
		Declara uma constante de escopo de bloco, apenas de leitura.

VARIÁVEIS
	Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis,
	 chamados de identificadores, obedecem determinadas regras.
	Um identificador JavaScript deve começar com uma letra, underline (_), 
	ou cifrão ($); os caracteres subsequentes podem também ser números (0-9). 
	Devido JavaScript ser case-sensitive, letras incluem caracteres de "A" a "Z" (maiúsculos) 
	e caracteres de "a" a "z" (minúsculos).

DECLARANDO VARIÁVEIS
	Você pode declarar uma variável de três formas:
	Com a palavra chave var. Por exemplo, var x = 42. 
	Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.

	Por simples adição de valor. Por exemplo, x = 42. 
	Isso declara uma variável global. Essa declaração gera um aviso de advertência no JavaScript. 
	Você não deve usar essa variante.

	Com a palavra chave let. Por exemplo, let y = 13. 
	Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco. 

CLASSIFICAÇÃO DE VARIÁVEIS
Uma variável declarada usando a declaração var ou let sem especificar o valor inicial tem o valor  
undefined.
Uma tentativa de acessar uma variável não declarada resultará no lançamento de uma 
exceção ReferenceError:
var a;
console.log("O valor de a é " + a); // saída "O valor de a é undefined"
console.log("O valor de b é " + b); // executa uma exception de erro de referência (ReferenceError) 

Você pode usar undefined para determinar se uma variável tem um valor. 
No código a seguir, não é atribuído um valor de entrada na variável e a declaração 
if será avaliada como verdadeira (true).
var input;
if(input === undefined){
  facaIsto();
} else {
  facaAquilo();
}

O valor undefined se comporta como falso (false), quando usado em um contexto booleano. 
Por exemplo, o código a seguir executa a função myFunction devido o elemento 
myArray ser undefined:
var myArray = [];
if (!myArray[0]) myFunction(); 

O valor undefined converte-se para NaN quando usado no contexto numérico.
var a;
a + 2;  // Avaliado como NaN

Quando você avalia uma variável nula, o valor nulo se comporta como 0 em contextos numéricos 
e como falso em contextos booleanos. Por exemplo:
var n = null;
console.log(n * 32); // a saída para o console será 0.

Escopo de variável
Quando você declara uma váriavel fora de qualquer função, ela é chamada de variável global, 
porque está disponível para qualquer outro código no documento atual. 
Quando você declara uma variável dentro de uma função, é chamada de variável local,  
pois ela está disponível somente dentro dessa função.

JavaScript antes do ECMAScript 6 não possuía escopo de declaração de bloco; pelo contrário, 
uma variável declarada dentro de um bloco de uma função é uma variável local (ou contexto global) 
do bloco que está inserido a função. 
Por exemplo o código a seguir exibirá 5, porque o escopo de x está na função 
(ou contexto global) no qual x é declarado, não o bloco, que neste caso é a declaração if. 

if (true) {
  var x = 5;
}
console.log(x);  // 5
Esse comportamento é alterado, quando usado a declaração let introduzida pelo ECMAScript 6.

if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y não está definido

Variável de elevação
Outra coisa incomum sobre variáveis em JavaScript é que você pode utilizar a variável 
e declará-la depois, sem obter uma exceção. 
Este conceito é conhecido como hoisting; variáveis em JavaScript são num sentido "hoisted" 
ou lançada para o topo da função ou declaração. 
No entanto, as variáveis que são "hoisted" retornarão um valor undefined. 
Então, mesmo se você usar ou referir a variável e depois declará-la e inicializá-la, 
ela ainda retornará undefined.

Exemplo 1
console.log(x === undefined); // exibe "true"
var x = 3;


Exemplo 2
// retornará um valor undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
Os exemplos acima serão interpretados como:

Exemplo 1
var x;
console.log(x === undefined); // exibe "true"
x = 3;
 
Exemplo 2
var myvar = "um valor";
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "valor local";
})();

Devido o hoisting, todas as declarações var em uma função devem ser colocadas no início da função. 
Essa recomendação de prática deixa o código mais legível.

VARIÁVEIS GLOBAIS
Variáveis globais são propriedades do objeto global. Em páginas web o objeto global 
é a window, assim você pode configurar e acessar variáveis globais utilizando 
a sintaxe window.variavel. 
Consequentemente, você pode acessar variáveis globais declaradas em uma janela ou frame 
ou frame de outra janela. Por exemplo, se uma variável chamada phoneNumber é declarada 
em um documento, você pode consultar esta variável de um frame como parent.phoneNumber.

CONSTANTES
Você pode criar uma constante apenas de leitura por meio da palavra-chave const. 
A sintaxe de um identificador de uma constante é semelhante ao identificador de 
uma variável: deve começar com uma letra, sublinhado ou cifrão e pode conter caractere alfabético, 
numérico ou sublinhado.
const PI = 3.14;
Uma constante não pode alterar seu valor por meio de uma atribuição ou ser declarada 
novamente enquanto o script está em execução. Deve ser inicializada com um valor.
As regras de escopo para as constantes são as mesmas para as váriaveis let de escopo de bloco. 
Se a palavra-chave const for omitida, presume-se que o identificador represente uma variável.
Você não pode declarar uma constante com o mesmo nome de uma função ou variável que estão 
no mesmo escopo. Por exemplo: 

// Isto irá causar um  erro
function f() {};
const f = 5;

// Isto também irá causar um erro.
function f() {
  const g = 5;
  var g;

  //declarações
}

Tipos de dados
	O mais recente padrão ECMAScript define sete tipos de dados:
	Seis tipos de dados são os chamados primitivos:
	Boolean. true e false.
	null. Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, 
	null não é o mesmo que Null, NULL, ou ainda outra variação.
	undefined. Uma propriedade superior cujo valor é indefinido.
	Number. 42 ou 3.14159.
	String. "Howdy"
	Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.
	Object
	Embora esses tipos de dados sejam uma quantidade relativamente pequena, 
	eles permitem realizar funções úteis em suas aplicações.  Objetos e funções 
	são outros elementos fundamentais na linguagem. Você pode pensar em objetos como 
	recipientes para os valores, e funções como métodos que suas aplicações podem executar.
	
CONVERSÃO DE TIPOS
	JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa 
	especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são 
	convertidos automaticamente conforme a necessidade durante a execução do script. 
	Então, por exemplo, você pode definir uma variável da seguinte forma:

	var answer = 42;
	E depois, você pode atribuir uma string para a mesma variável, por exemplo:

	answer = "Obrigado pelos peixes...";
	Devido JavaScript ser dinamicamente tipado, essa declaração não gera uma mensagem de erro.
	Em expressões envolvendo valores numérico e string com o operador +, JavaScript 
	converte valores numérico para strings. Por exemplo, considere a seguinte declaração:

	x = "A resposta é " + 42 // "A resposta é 42"
	y = 42 + " é a resposta" // "42 é a resposta"
	Nas declarações envolvendo outros operadores,  JavaScript não converte valores numérico 
	para strings. Por exemplo:
	"37" - 7 // 30
	"37" + 7 // "377"	
	
CONVERTENDO STRINGS EM NÚMEROS
	No caso de um valor que representa um número está armazenado na memória como uma string, 
	existem métodos para a conversão.
	parseInt()
	parseFloat()
	parseInt irá retornar apenas números inteiros, então seu uso é restrito 
	para a casa dos decimais. Além disso, é uma boa prática ao usar parseInt incluir o 
	parâmetro da base. O parâmetro da base é usado para especificar qual sistema númerico 
	deve ser usado.
	Uma método alternativo de conversão de um número em forma de string é com o operador 
	+ (operador soma):
	"1.1" + "1.1" = "1.11.1"
	(+"1.1") + (+"1.1") = 2.2   
	// Nota: Os parênteses foram usados para deixar mais legível o código, ele não é requirido.

*/