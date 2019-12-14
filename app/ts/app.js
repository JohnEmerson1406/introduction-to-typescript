var ts = "Type Script";
console.log("Hello, " + ts);
var a = 10;
console.log(a); //saída: undefined
var b = 10;
console.log(typeof (b)); //saída: number
var c = 10;
c = "john";
console.log(c); //saída: john
// boolean:
var isDone = false;
isDone = true;
// number: engloba os tipos inteiros e reais
var inteiro = 6;
var real = 4.8;
var hex = 0xf0a0d;
var binario = 42;
var octal = 228;
// string: cadeias de caracteres delimitadas por “” e ‘’
var color = "azul";
color = 'vermelho' + " escuro";
console.log(color);
/* Podem ter múltiplas linhas sem necessidade de
caracteres de escape;
Também podem conter expressões;
São delimitas por crases ``: */
var nome = "John Emerson";
var idade = 19;
var frase = "Meu nome \u00E9 " + nome + ".\n\nCompletarei " + (idade + 1) + " ano que vem.";
console.log(frase);
/* Como Java ou C#, são maneiras de fornecer
nomes para conjuntos de valores numéricos: */
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Verde"] = 1] = "Verde";
    Cores[Cores["Azul"] = 2] = "Azul";
})(Cores || (Cores = {}));
var d = Cores.Verde;
console.log(d); // 1
console.log(Cores[2]); //azul
var numeros1 = [1, 2, 3];
var numeros2 = [1, 2, 3];
var numeros3 = [1, 2, 3];
numeros3.push(4);
console.log(numeros3.reverse()); // [4,3,2,1]
//# sourceMappingURL=app.js.map