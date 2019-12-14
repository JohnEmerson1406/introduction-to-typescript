let ts : string = "Type Script"
console.log("Hello, " + ts);

let a : number = 10;
console.log(a); //saída: undefined

let b = 10;
console.log(typeof(b)); //saída: number

let c : any = 10;
c = "john";
console.log(c); //saída: john

// boolean:
let isDone: boolean = false;
isDone = true;

// number: engloba os tipos inteiros e reais
let inteiro: number = 6;
let real: number = 4.8;
let hex: number = 0xf0a0d;
let binario: number = 0b101010;
let octal: number = 0o344;

// string: cadeias de caracteres delimitadas por “” e ‘’
let color: string = "azul";
color = 'vermelho' + " escuro";
console.log(color);

/* Podem ter múltiplas linhas sem necessidade de
caracteres de escape;
Também podem conter expressões;
São delimitas por crases ``: */
let nome : string = "John Emerson";
let idade: number = 19;
let frase: string = `Meu nome é ${nome}.

Completarei ${ idade + 1 } ano que vem.`;
console.log(frase);

/* Como Java ou C#, são maneiras de fornecer
nomes para conjuntos de valores numéricos: */
enum Cores {Vermelho, Verde, Azul}
let d: Cores = Cores.Verde;

console.log(d); // 1
console.log(Cores[2]) //azul

let numeros1: number[] = [1, 2, 3];
let numeros2: Array<number> = [1, 2, 3];
let numeros3: number[] = [1, 2, 3];
numeros3.push(4);
console.log(numeros3.reverse()); // [4,3,2,1]
