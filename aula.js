
// // operador ternario

//  let pontos = 100;
//  let tipo = pontos > 100 ? 'premium' : 'comum';
//   console.log(tipo)


// //operador and (&&) retorna true se os dois operandos forem true.
// //operador ou  (||) retorna true se um dos operandos forem true.
// let maiorIdade = false;
// let carteiraDeTrabalho = false;
// let podeAplicar = maiorIdade || carteiraDeTrabalho

// console.log(podeAplicar)

// // operador not (!)

// let candidatoRecusado = !podeAplicar
// console.log(candidatoRecusado)

// //operadores logicos não booleanos: basicamente são valores undefined, null,0, ' ', false e NaN

// //truthy

// let corPadrao = 'azul'
// let corDoPerfil= 'vermelho'
// console.log(corPadrao || corDoPerfil)

// //exercicio trocando valores de variaveis:

// let a = 'roxo'
// let b = 'preto'
// let c = a;
// a = b;



// console.log (a)
// console.log (c)

// //if...else
// // se a hora estiver entre 06:00 ate 12:00 nos vamos exibir bom dia!
// // se a hora estiver entre 13:00 e 18:00 nos vamos exibir boa tarde!
// //caso contrario boa noite!

// let hora = 18;

// if (hora > 6 && hora < 12) {
//   //codigo ser executado
// console.log("Bom dia! são " + hora + " horas");
// }

// else if (hora > 13 && hora < 18) {
//   console.log("Boa tarde, são exatamente " + hora + " horas");

// }

// else {
// console.log("Boa noite são exatamente " + hora +" horas");
// }

// //switch...case

// let permissao = 'diretor';


// switch(permissao) {
//   case 'comum':
//   console.log("usuario comum" )
//   break;



 
//   case 'gerente':
//   console.log("usuario gerente" );
//   break;


  

//   case 'diretor':
//   console.log("usuario diretor" );
//   break;


// default:
//   console.log('Usuario não reconhecido');

// }

// //laço for // loop for
// //1.for
// for(let i = 10; i >= 1; i--){
//   if(i % 2 === 0)

//   console.log(i);

// }

// //2.while loop

// let I = 5;

// while(I >= 1){
//   if(I % 2 !== 0){
//     console.log(I)
//   }
//   I--
// }

//loop do while

// 
//loop for in

// const pessoa = {
//     nome: 'Jeysson',
//     idade: 23
// };

// for(let key in pessoa){
//     console.log(key,pessoa ['nome'])
// }

// const cores = ['azul', 'verde','branco']

    



// for(let indice in cores){
//     console.log(cores[indice])
// }

// for...of

// const cores = ['azul', 'verde','branco']

// for(let indice of cores){
//     console.log(indice)
// }


// exercicio 02
//crie uma uma funcão e retorne o maior entre eles


// let maxValor  = max(50,60)
// console.log(maxValor)

// function max (idade1,idade2,) {
//      return idade1 > idade2 ? idade1 : idade2
    
    
    

// }

//fizz buzz ele compara valores e retorna alguns valores baseados nesses valores passados.
//divisil por 3 => fizz
//divisivel por 5 => buzz
//divisivel por 3 e 5 => fizz buzz
// nao divisil por 3 e 5  retorna o divisor
//valor que não é um numero retorna uma mensagem NaN


// const resultado = fizzBuzz(3);
//     console.log(resultado);

//     function fizzBuzz(entrada){
    
//     if( typeof entrada !== 'number') 
//         return 'não é um numero'
    
//     if (entrada % 3 === 0) 
//         return 'fizz'
//     if (entrada % 5 === 0)
//         return 'Buzz'

//     if (entrada % 3 === 0 && entrada % 5 === 0)
//         return 'fizzBuzz'

//     return 'entrada'
    

// };


// const velocidade = retornarVelocidade(130)
// console.log(velocidade)

// function retornarVelocidade(medidor) {
//     const velocidadePermitida = 70;
//     const kmPorPonto = 5;
//     if( typeof medidor !== 'number') 
//          return 'erro no sistema'
    
//     if( medidor <= velocidadePermitida )
//        console.log ('velocidade permitida')

//     else {
//         const pontos = Math.floor((medidor - velocidadePermitida) / kmPorPonto)
        
//         if(pontos >= 12){
//             console.log('carteira suspensa',pontos + ' pontos')
//         }
//         else {
//             console.log('pontos',pontos);
//         }
//     }
    

// }



//exercicio "PAR" OU "IMPAR"

// exibirTipo(3)

// function exibirTipo (receba) {
//     for(i = 0; i <= receba; i++){
//         if(i % 2 === 0) {
//             console.log(i,"PAR")
//         }
//         else 
//         console.log(i,"IMPAR")
//     }
// }


//exercicio
// criar um metodo para ler propriedades de um objetos 
// e exibir somente somente objeto do tipo 'string'


// const filme = {

//     nome: 'velozes e furiosos',
//     ano: 2018,
//     diretor: 'dennzel washigton',
//     personagem:'brian'

// };
// exibirPropriedade(filme)

// function exibirPropriedade  (obj) {
//     for(prop in obj) 
//     if (typeof obj[prop] === 'string') {
//         console.log(prop,obj[prop])
//     }
// }

//exercicio 7

// somar(10)
// function somar(limite) {
//     let multiplosDe3 = 0;
//     let multiplosDe5 = 0;
//     for(i = 0; i <= limite; i++) {
//         if(i % 3 === 0)
//         multiplosDe3+=i;
//         if(i % 5 === 0)
//         multiplosDe5+=i;



//     }    
// console.log(multiplosDe3 + multiplosDe5)
// }

// 





// const celular = {
//     marcaCelular : 'Nokia',
//     capacidadeBateria : 50000,
//     tamanhoTela : 4.4
//     }
   



// const newObject = Object.assign({
//     ano : 1992},celular);
// console.log(newObject)

// const object2 = {...celular};
// console.log(object2)

//exercicio 43 - Igualdade de Objetos (exercicio)

// function endereco(rua,cidade,cep) {
//     this.rua = rua,
//     this.cidade - cidade,
//     this.cep = cep 
// }
// const endereco1 = new endereco('a','b','c');
// const endereco2 = new endereco('a','b','c');

// function saoIguais(endereco1,endereco2) {
//     endereco1.rua === endereco2.rua &&
//     endereco1.cidade === endereco2.cidade &&
//     endereco1.cep === endereco2.cep 

// }
    
// function temEnderecoMemoriaIguais(endereco1,endereco2) {
//     return endereco1 === endereco2
    
// } 
// console.log(temEnderecoMemoriaIguais(endereco1,endereco2));
    

let num1 = 'preto'
let num2  = 'branco'

console.log(num1)






        

    

                               




    



    







