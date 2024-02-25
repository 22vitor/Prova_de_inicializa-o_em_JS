//[JS-A01] Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3). Calcule a média ponderada das notas e atribua o resultado à variável "media". Após o cálculo, exiba a média ponderada no console.

//OBS: Para calcular a média ponderada multiplica os valores das notas pelos valores dos pesos, e divide pelas somas de todos os pesos. Lembre-se de declarar valores para os pesos e para as notas.

const n1 = 3;
const p1 = 3.0;

const n2 = 2.4;
const p2 = 3.0;

const n3 = 3.6;
const p3 = 4.0;

let media;
media = n1 * p1, n2 * p2, n3 * p3 / 10;

alert(
  `A média total foi obtida pelo cálculo de:  \n ${n1} * ${p1} \n ${n2} * ${p2} \n ${n3} * ${p3} \n / ${p1} / ${p2} / ${p3},\n a media foi de ${media}!`
);
