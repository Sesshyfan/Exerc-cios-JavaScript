alert('Exercício 1');

let A = 10;
let B = 20;

A = 20;
B = 10;

console.log(A);
console.log(B);

alert('O valor de A e ' + A);
alert('O valor de B é ' + B);

alert('Exercício 2');

const total_de_eleitores = prompt('Total de eleitores:');
const votos_brancos = prompt('Votos brancos:');
const votos_nulos = prompt('Votos nulos:');
const votos_validos = prompt('Votos validos:');

const percentual_votos_brancos = (votos_brancos/total_de_eleitores)*100;
const percentual_votos_nulos = (votos_nulos/total_de_eleitores)*100;
const percentual_votos_validos = (votos_validos/total_de_eleitores)*100;

alert (`O percentual de votos brancos e ${percentual_votos_brancos}%`);
alert (`O percentual de votos nulos é ${percentual_votos_nulos}%`);
alert (`O percentual de votos validos é ${percentual_votos_validos}%`);

alert('Exercício 3');

const custo_de_fábrica = Number(prompt('Custo de fábrica:'));
let custo_do_distribuidor;
let custo_do_imposto;
let custo_final_ao_consumidor;

custo_do_distribuidor = custo_de_fábrica*0.28;

custo_do_imposto = custo_de_fábrica*0.45;

custo_final_ao_consumidor = custo_de_fábrica + custo_do_distribuidor + custo_do_imposto;

alert('O custo final ao consumidor é ' + custo_final_ao_consumidor);

alert ('Exercício 4');

const salário_fixo = Number(prompt('Salário fixo:'));

const número_de_carros_vendidos = Number(prompt('Número de carros vendidos: '));

const valor_do_carro_vendido = Number(prompt('Valor do carro vendido:'));

const valor_da_comissão = Number(prompt('Informe o valor da comissão por carro vendido:'));

let valor_das_vendas;

let valor_recebido_de_comissão;

let valor_do_percentual_das_vendas;

let salário_final;

valor_das_vendas = número_de_carros_vendidos*valor_do_carro_vendido;

valor_recebido_de_comissão = número_de_carros_vendidos*valor_da_comissão;

valor_do_percentual_das_vendas = valor_das_vendas*0.05;

salário_final = salário_fixo + valor_das_vendas + valor_recebido_de_comissão + valor_do_percentual_das_vendas;

alert ('Salário final: ' + salário_final);

alert('Exercício 5');

const temperatura_em_graus_celsius = prompt('Temperatura em graus celsius: ');

temperatura_em_graus_fahrenheit=temperatura_em_graus_celsius*1.8+32;

alert('Conversão para fahrenheit: ' + temperatura_em_graus_fahrenheit + ' ºF');

alert ('Exercício 6:');

const numero_1 = prompt('Insira um número: ');

const numero_2 = prompt('Insira outro número: ');

if(numero_1==numero_2){alert('Os números são iguais')} else if (numero_1>numero_2){alert('O primeiro número é maior.')}else{alert('O segundo número é maior.');}

alert ('Exercício 7:');

const numero_de_maçãs = prompt('Número de maçãs: ');

let total_da_compra;

if(numero_de_maçãs<12){total_da_compra = numero_de_maçãs*0.3; alert('O total da compra é ' + total_da_compra + ' reais.');}else if(numero_de_maçãs>11){total_da_compra = numero_de_maçãs*0.25; alert('O total da compra é ' + total_da_compra + ' reais.');}else{alert('Número inválido.');}


alert ('Exercício 9');

const numero = prompt('Insira um número inteiro positivo: ');

if(numero/2==1){alert('O número inserido é ímpar.');}else{alert('O número é par.');}


alert ('Exercício 10');

const ano_de_nascimento = prompt ('digite seu ano de nascimento');

const ano_atual = prompt ('digite o ano atual');

idade = ano_atual - ano_de_nascimento;

if(idade>15){alert('Você tem' + idade + 'anos. Você tem idade para votar.');}else{alert('Você tem menos de 16 anos. Não tem idade para votar.');}













