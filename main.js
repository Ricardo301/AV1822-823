import {Veiculo} from './Veiculo.js';
import {chegada,recorde,pesquisa} from './api.js'
import {Piloto} from './Piloto.js'
import { Corrida } from './Corrida.js';


//Piloto.prototype.xp = function(){
 // return (this.treinosMes + (this.anosPilotando*30)) / 100
//}

let arnaldo = new Piloto('Arnaldo',4,15)
 //console.log(arnaldo.xp())

let pedro = new Piloto('Pedro',2,30)
// console.log(pedro.xp())




let carrango = new Veiculo('carro','corsa',2000,'cinza',100)
let ferrari = new Veiculo('carro','ferrari',2021,'vermelha',400)



var relatorio = function(obj){

      chegada(obj.piloto).then((respostaDistancia) => {
    

      if (respostaDistancia.length == Veiculo.totalVeiculosCorrida){
            recorde().then((resposta) => {
              console.log(`O recorde é de ${resposta}`)
            }).catch(erro => console.log(erro))
      }

    }).catch(erro => console.log(erro))
  
    console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km' )
    corrida.largada()
   
    
}
  let veiculos = [ferrari,carrango]
   let pilotos = [pedro,arnaldo]
   let corrida = new Corrida(veiculos,pilotos)


ferrari.acelerando0a100(arnaldo,relatorio)


carrango.acelerando0a100(pedro,relatorio)










 