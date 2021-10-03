export {Corrida}
import {Veiculo} from './Veiculo.js'
import {Piloto} from './Piloto.js'

class Corrida{
    constructor(veiculos,pilotos){
        
        this.veiculos = veiculos
        this.pilotos = pilotos
        
    }
    
    largada(){
       return console.log(this.veiculos[1])    }

    



     
}

/*
Criar a classe Corrida (Corrida.js) para que estes carros consigam realizar a corrida
hipotética, esta classe deverá ter os seguintes métodos e funcionalidades: (3,0)

- Ao final deverá mostrar o pódio final com as colocações dos pilotos em uma corrida
- Deverá mostrar a diferença de tempo entre o participante solicitado em relação ao que
chegou na sua frente, diferença em segundos e milesegundos.
- Deverá ser enviado para a API (api.js) o recorde para que seja armazenado.
- Deverá ter um método na API para armazenar e mostrar o recorde sempre que
solicitado
- Deverá ter um método na API em que seja possível pesquisar se determinado piloto
está dentre os recordistas dentre todas as corridas realizadas



*/ 