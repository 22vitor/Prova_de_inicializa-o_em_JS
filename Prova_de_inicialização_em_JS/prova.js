//[JS-A01] Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3). Calcule a média ponderada das notas e atribua o resultado à variável "media". Após o cálculo, exiba a média ponderada no console.

//OBS: Para calcular a média ponderada multiplica os valores das notas pelos valores dos pesos, e divide pelas somas de todos os pesos. Lembre-se de declarar valores para os pesos e para as notas.

const n1 = 4;
const p1 = 5;

const n2 = 5;
const p2 = 7;

const n3 = 8;
const p3 = 10;

const media = (n1 * p1, n2 * p2, n3 * p3) / (p1 + p2 + p3);

console.log("A média ponderada foi de: " , media.toFixed(2));
